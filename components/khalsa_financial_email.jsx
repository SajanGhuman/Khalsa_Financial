import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const KhalsaFinancialEmail = ({ name }) => {
  return (
    <Html>
      <Head />
      <Preview>
        You have been registered for the khalsa financial seminar 🤩
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              src="https://utfs.io/f/DImcFXMkYX0OmT1yDi2s1GUEAX5kDweYHp3yjJl69ma0rqxt"
              width={100}
              alt="Khalsa Financial"
            />
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>
            <Text style={paragraph}>
              You have been successfully registered for the upcoming Khalsa
              Financial seminar! We are excited to have you join us.
            </Text>
            <Text style={paragraph}>Join the event using the link below:</Text>
            <Text style={paragraph}>
              <Link href="https://meet.google.com/fake-link" style={link}>
                Join Event
              </Link>
            </Text>
            <Text style={paragraph}>
              If you have any questions or need assistance, feel free to reach
              out at admin@khalsfinancial.ca
            </Text>
            <Text style={paragraph}>Looking forward to seeing you there!</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

KhalsaFinancialEmail.PreviewProps = {
  usrFirstname: "Alan",
};

export default KhalsaFinancialEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 16,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
  padding: "45px",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
};

const link = {
  textDecoration: "underline",
};
