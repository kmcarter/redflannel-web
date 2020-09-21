import Head from 'next/head';
import { Paper, Typography } from '@material-ui/core';

import Link from "../components/link";
import Header from "../components/header";
import Section from "../components/section";

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
            <Typography component="li"><Link href="https://nextjs.org/" target="_blank">Next.js</Link>, a React web framework</Typography>
            <Typography component="li"><Link href="https://material-ui.com/" target="_blank">Material-UI</Link>, a React UI framework</Typography>
            <Typography component="li"><Link href="https://html5up.net/stellar" target="_blank">Stellar</Link>, a free HTML5 template by <Link href="https://html5up.net/" target="_blank">HTML5Up</Link></Typography>
            <Typography component="li"><Link href="https://fontawesome.com/" target="_blank">Font Awesome</Link> icons</Typography>
            <Typography component="li"><Link href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</Link></Typography>
            <Typography component="li"><Link href="https://aws.amazon.com/" target="_blank">Amazon Web Services</Link>, including: SES</Typography>
            <Typography component="li"><Link href="https://www.google.com/recaptcha/" target="_blank">Google RECAPTCHA</Link> (v3)</Typography>
            <Typography component="li">Privacy Policy created with <Link href="https://getterms.io/" target="_blank">GetTerms</Link>.</Typography>
            </Typography>
          <Typography paragraph>Additionally, the source code is <Link href="">open source and published on GitHub</Link>, where you can find additional notes about my design and coding decisions.</Typography>
        </Section>
      </Paper>
    </>
  )
}