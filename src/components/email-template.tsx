import { METADATA_WEBSITE } from "@/configs/site/metadata.config"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from "@react-email/components"

interface ContactFormEmailProps {
  fullName: string
  emailAddress: string
  message: string
}

const EmailTemplate = ({
  fullName,
  emailAddress,
  message
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from {METADATA_WEBSITE.url}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>New Message from {fullName}</Heading>
          <Hr style={hr} />
          <Text style={paragraph}>
            You&apos;ve received a new lead via the contact form.
          </Text>
          <Text style={paragraph}>
            <strong>From:</strong> {fullName}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${emailAddress}`} style={link}>
              {emailAddress}
            </a>
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={subheading}>
            Message:
          </Heading>
          <Text style={messageBox}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            This message was sent from the contact form on{" "}
            {METADATA_WEBSITE.url}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default EmailTemplate

// --- STYLES ---

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginTop: "64px",
  marginBottom: "64px",
  borderRadius: "8px"
}

const box = {
  padding: "0 48px"
}

const heading = {
  color: "#1a1a1a",
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const
}

const subheading = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "24px"
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0"
}

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px"
}

const messageBox = {
  backgroundColor: "#f0f4f8",
  padding: "16px",
  borderRadius: "6px",
  color: "#333",
  fontSize: "15px",
  lineHeight: "22px",
  whiteSpace: "pre-wrap" as const
}

const link = {
  color: "#007bff",
  textDecoration: "underline"
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px"
}
