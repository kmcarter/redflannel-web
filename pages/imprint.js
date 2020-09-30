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
          <Typography paragraph>Special thanks to <Link href="https://www.behance.net/helenwight" target="_blank" rel="noopener">Helen Wight</Link> for designing Red Flannel's logo!</Typography>
          <Typography paragraph>This site was built using the following:</Typography>
          <Typography component="ul" gutterBottom>
            <Typography component="li"><Link href="https://nextjs.org/" target="_blank" rel="noopener">Next.js</Link>, a React web framework</Typography>
            <Typography component="li"><Link href="https://material-ui.com/" target="_blank" rel="noopener">Material-UI</Link>, a React UI framework</Typography>
            <Typography component="li"><Link href="https://html5up.net/stellar" target="_blank" rel="noopener">Stellar</Link>, a free HTML5 template by <Link href="https://html5up.net/" target="_blank" rel="noopener">HTML5Up</Link></Typography>
            <Typography component="li"><Link href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</Link> icons</Typography>
            <Typography component="li"><Link href="https://code.visualstudio.com/" target="_blank" rel="noopener">Visual Studio Code</Link></Typography>
            <Typography component="li"><Link href="https://aws.amazon.com/" target="_blank" rel="noopener">Amazon Web Services</Link>, including: SES, Amplify</Typography>
            <Typography component="li"><Link href="https://www.google.com/recaptcha/" target="_blank" rel="noopener">Google RECAPTCHA</Link> (v3)</Typography>
            <Typography component="li">Privacy Policy created with <Link href="https://getterms.io/" target="_blank" rel="noopener">GetTerms</Link></Typography>
            </Typography>
          <Typography paragraph>Additionally, the source code is <Link href="https://github.com/kmcarter/redflannel-web" target="_blank" rel="noopener">open source and published on GitHub</Link>, where you can find additional notes about my design and coding decisions. It is licensed under the <Link href="https://github.com/kmcarter/redflannel-web/blob/master/LICENSE" target="_blank" rel="noopener">Mozilla Public License, Version 2.0</Link>.</Typography>
        </Section>
      </Paper>
    </>
  )
}