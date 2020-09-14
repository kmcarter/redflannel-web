import Head from 'next/head';
import { Paper, Box, Typography, Link } from '@material-ui/core';
import Header from "../components/header";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Red Flannel Web Services</title>
      </Head>
      <Header h1="Imprint" alt>
        About this website
      </Header>
      <Paper id="main">
        <Section>
          <Typography paragraph>Special thanks to <Link href="https://www.behance.net/helenwight" target="_blank">Helen Wight</Link> for designing Red Flannel's logo!</Typography>
          <Typography paragraph>This site was built using the following:</Typography>
          <Typography component="ul" gutterBottom>
            <Typography component="li">Next.js, a React web framework</Typography>
            <Typography component="li">Material-UI, a React UI framework</Typography>
            <Typography component="li">Stellar, a free HTML5 template by <Link href="https://html5up.net/" target="_blank">HTML5Up</Link></Typography>
            <Typography component="li">Font Awesome icons</Typography>
            <Typography component="li">Visual Studio Code</Typography>
            <Typography component="li">Amazon Web Services, including: S3, SES, CloudFront</Typography>
            <Typography component="li">Google RECAPTCHA (v3)</Typography>
            </Typography>
          <Typography paragraph>Additionally, the source code is <Link href="">open source and published on GitHub</Link>, where you can find additional notes about my design and coding decisions.</Typography>
        </Section>
      </Paper>
    </>
  )
}