import Head from 'next/head';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Typography from 'typography';
// import sternGroveTheme from 'typography-theme-stern-grove';
import { Container, Box, Paper, Grid, Card, CardContent, Typography, Link } from '@material-ui/core';

import styles from '../styles/Home.module.scss';

import skills from "../content/skills.js";
import Skill from '../components/skill';
import ContactForm from '../components/contact-form';

// const typography = new Typography(sternGroveTheme);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c4453b',
    },
    secondary: {
      main: '#214a5c',
    },
  },
});

export default function Home() {
  // typography.injectStyles();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Red Flannel Web Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Container fixed>
        <Paper>
          <Box p={2} my={2}>
            <h1>We are Red Flannel</h1>
            <Typography variant="subtitle1" gutterBottom>A warmer approach to software development</Typography>
          </Box>
        </Paper>
        <Box>
          <h2>Our skills &amp; interests</h2>
          <Grid container spacing={2}>
            {skills.map((skill, i) => (
              <Skill key={i} {...skill} />
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography component="h2" variant="h2">About Kelly</Typography>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Box height="100%" borderRadius="50%" bgcolor="text.disabled" />
            </Grid>
            <Grid item xs={9}>
              <Typography paragraph>Hi, I'm Kelly, and I am the developer behind Red Flannel. I specialize in web application development and build high-quality solutions with an appreciation for detail and craftsmanship often missing in the industry.</Typography>
              <Typography paragraph>I'm a versatile software engineer and web developer with over a decade of practical work experience (you can find my full CV on <Link href="https://www.linkedin.com/in/kellycarterit" target="_blank" rel="noopener">LinkedIn</Link>). I enjoy building JavaScript-based client-side apps, Flask (Python) apps, Ruby on Rails apps, and Shopify ecommerce stores. I am committed to good communication, honesty, and successful project completion.</Typography>
              <Typography paragraph>Red Flannel is located in Seattle, Washington, but I have many years of experience working remotely for clients all over the world.</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Container>
    </ThemeProvider>
  )
}
