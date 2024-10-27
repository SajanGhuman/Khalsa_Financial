import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import BluewaveResetPasswordEmail from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
const DOMAIN = process.env.DOMAIN || "localhost:3000";
const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";

export async function POST(req: NextRequest) {
  const { email, name, tradingLevel } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Google Meet Link",
      react: BluewaveResetPasswordEmail({
        name: name,
      }),
    });

    // Confirm success with 201 status
    console.log(`Email sent to ${email}`);
    return NextResponse.json({ message: "Mail sent" }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error during password reset process:", error.message);

      // Type assertion to access response safely
      const apiError = error as { response?: { body?: any } };

      // Check if response exists and log it
      if (apiError.response && apiError.response.body) {
        console.error("API error:", apiError.response.body);
      }

      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    }
  }
}
