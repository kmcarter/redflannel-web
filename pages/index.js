import Head from 'next/head';
// import Typography from 'typography';
// import sternGroveTheme from 'typography-theme-stern-grove';
import { Box, Paper, Grid, Typography, Link } from '@material-ui/core';

// import styles from '../styles/Home.module.scss';

import skills from "../content/skills.js";
import Skill from '../components/skill';
import Header from "../components/header";
import Section from "../components/section";
import SectionHeader from "../components/section-header";
import ContactForm from '../components/contact-form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Flannel Web Services</title>
      </Head>
      <Header h1="Red Flannel">A warmer approach to software development</Header>
      <Paper id="main">
        <Section>
          <Grid container spacing={8} direction="row-reverse" className="spotlight">
            <Grid item xs={12} md={4}>
              <Box className="image">
                <img src="/kelly.jpg" alt="Kelly Carter" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <SectionHeader>About Kelly</SectionHeader>
              <Typography paragraph>Hi, I'm Kelly, and I am the developer behind Red Flannel. I specialize in web application development and build high-quality solutions with an appreciation for detail and craftsmanship often missing in the freelance industry. I use <Link href="https://deconforming.com/they-them-pronouns/" target="_blank">they/them pronouns</Link>.</Typography>
              <Typography paragraph>I'm a versatile software engineer and web developer with over a decade of practical work experience (you can find my full CV on <Link href="https://www.linkedin.com/in/kellycarterit" target="_blank" rel="noopener">LinkedIn</Link>). I particularly enjoy building in C#, React, and Python. I am committed to good communication, honesty, and successful project completion.</Typography>
              <Typography paragraph>Red Flannel is located in Seattle, Washington, but I have many years of experience working remotely for clients all over the world.</Typography>
            </Grid>
          </Grid>
        </Section>
        <Section special>
          <SectionHeader>Our skills &amp; interests</SectionHeader>
          <Grid container spacing={8} justify="space-between" className="features">
            {skills.map((skill, i) => (
              <Skill key={i} idx={i} {...skill} />
            ))}
          </Grid>
        </Section>
        <Section>
          <SectionHeader>Get in touch</SectionHeader>
          <Typography paragraph>Tell me a little about your dreams and goals and I will reach out to schedule a free consultation.</Typography>
          <ContactForm />
        </Section>
      </Paper>
    </>
  )
}