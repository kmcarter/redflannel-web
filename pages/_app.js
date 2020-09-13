import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBIC_GOOGLE_RECAPTCHA_SITE_KEY}>
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp