import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import CssBaseline from "@material-ui/core/CssBaseline";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { config } from '@fortawesome/fontawesome-svg-core'

import Layout from "../components/layout";

import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import '../styles/globals.scss'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {

  const theme = createMuiTheme({
    palette: {
      text: {
        primary: '#636363',
        secondary: "#fff"
      },
      primary: {
        main: '#c4453b',
        contrastText: "rgba(255, 255, 255, 0.65)"
      },
      secondary: {
        main: '#4f7689',
      },
    },
    typography: {
      fontFamily: 'Source Sans Pro',
      lineHeight: 1.65,
      fontWeight: 300,
      body1: {
        fontSize: "17pt",
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        alignContent: "center"
      },
      h1: {
        fontWeight: 300,
        fontSize: "5rem",
      },
      h2: {
        fontWeight: 300,
        fontSize: "2.75rem"
      },
      h3: {
        fontWeight: 300
      },
      h4: {
        fontWeight: 300,
        fontSize: "2rem"
      },
      subtitle1: {
        fontWeight: 300,
        fontSize: "2rem"
      },
    },
    props: {
      MuiLink: {
        underline: "none"
      }
    },
    overrides: {
      MuiFormLabel: {
        root: {
          color: "#636363"
        }
      }
    }
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBIC_GOOGLE_RECAPTCHA_SITE_KEY}>
      <Head>
        <title>Red Flannel Web Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp