import Typography from "@material-ui/core/Typography";

import Section from "../components/section";
import SectionHeader from "../components/section-header";
import ContactForm from '../components/contact-form';

export default function Contact() {
  return (
    <Section>
      <SectionHeader>Get in touch</SectionHeader>
      <Typography paragraph>Tell me a little about your dreams and goals and I will reach out to schedule a free consultation.</Typography>
      <ContactForm />
    </Section>
  )
}