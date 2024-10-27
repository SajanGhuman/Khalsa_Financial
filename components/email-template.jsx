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

const BluewaveEventRegistrationEmail = ({ name }) => {
  return (
    <Html>
      <Head />
      <Preview>You have been registered for the Bluewave Labs event</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              src="https://utfs.io/f/fYAncjDxKRb0SB5lSuLK58qIuaP0cF3tMzrJCA4G92LHNofp"
              width={100}
              alt="Bluewave Labs"
            />
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>
            <Text style={paragraph}>
              You have been successfully registered for the upcoming Bluewave Labs event! We are excited to have you join us.
            </Text>
            <Text style={paragraph}>
              Join the event using the link below:
            </Text>
            <Text style={paragraph}>
              <Link href="https://meet.google.com/fake-link" style={link}>
                Join Event
              </Link>
            </Text>
            <Text style={paragraph}>
              If you have any questions or need assistance, feel free to reach out.
            </Text>
            <Text style={paragraph}>
              See our Help Center for{" "}
              <Link href="https://bluewavelabs.ca/" style={link}>
                more information.
              </Link>
            </Text>
            <Text style={paragraph}>Looking forward to seeing you there!</Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2024 Bluewave Labs, All Rights Reserved <br />
              123 Bluewave Drive, Suite 500, Toronto, CA
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

BluewaveEventRegistrationEmail.PreviewProps = {
  usrFirstname: "Alan",
};

export default BluewaveEventRegistrationEmail;

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

