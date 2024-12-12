import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import KhalsaFinancialEmail from "../../../components/khalsa_financial_email";
import prisma from "../../../lib/prisma";
import { randomUUID } from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, name, tradingLevel } = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    // Create a new user with a 'PENDING' status if it does not exist
    await prisma.user.create({
      data: {
        user_id: `${randomUUID()}${randomUUID()}`.replace(/-/g, ""),
        email,
        first_name: name,
        last_name: "",
        role: tradingLevel || "",
      },
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "admin@khalsafinancial.ca",
      to: email,
      subject: "Google Meet Link",
      react: KhalsaFinancialEmail({
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
