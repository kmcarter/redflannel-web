import { Box, Grid, Typography, Link } from '@material-ui/core';

import Section from "../components/section";
import SectionHeader from "../components/section-header";

export default function About() {
  return (
    <Section>
      <SectionHeader>About Kelly</SectionHeader>
      <Grid container spacing={8} direction="row-reverse" alignItems="flex-start" className="spotlight">
        <Grid item xs={12} md={4}>
          <Box className="image">
            <img src="/kelly.jpg" alt="Kelly Carter" />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography paragraph>Hi, I'm Kelly, and I am the developer behind Red Flannel. I specialize in web application development and build high-quality solutions with an appreciation for detail and craftsmanship often missing in the freelance industry. I use <Link href="https://deconforming.com/they-them-pronouns/" target="_blank">they/them pronouns</Link>.</Typography>
          <Typography paragraph>I'm a versatile software engineer and web developer with over a decade of practical work experience (you can find my full CV on <Link href="https://www.linkedin.com/in/kellycarterit" target="_blank" rel="noopener">LinkedIn</Link>). I particularly enjoy building in C#, React, and Python. I am committed to good communication, honesty, and successful project completion.</Typography>
          <Typography paragraph>Red Flannel is located in Seattle, Washington, but I have many years of experience working remotely for clients all over the world.</Typography>
        </Grid>
      </Grid>
    </Section>
    )
}