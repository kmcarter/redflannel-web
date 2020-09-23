import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from "../components/link";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1)
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Section>
      <SectionHeader>About Kelly</SectionHeader>
      <Grid container spacing={8} direction="row-reverse" alignItems="flex-start" className="spotlight">
        <Grid item xs={12} md={4}>
          <Avatar src="/kelly.jpg" alt="Kelly Carter" className={classes.avatar} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography paragraph>Hi, I'm Kelly, and I am the developer behind Red Flannel. I specialize in web application development and build high-quality solutions with an appreciation for detail and craftsmanship often missing in the freelance industry. I use <Link href="https://deconforming.com/they-them-pronouns/" target="_blank" rel="noopener">they/them pronouns</Link>.</Typography>
          <Typography paragraph>I'm a versatile software engineer and web developer with over a decade of practical work experience (you can find my full CV on <Link href="https://www.linkedin.com/in/kellycarterit" target="_blank" rel="noopener">LinkedIn</Link>). I particularly enjoy building in C#, React, and Python. I am committed to good communication, honesty, and successful project completion.</Typography>
          <Typography paragraph>Red Flannel is located in Seattle, Washington, but I have many years of experience working remotely for clients all over the world. I am particularly interested in contributing to organizations or projects that focus on doing social good or deemphasize profit as a singular motivator, but I have experience in a variety of industries, from solar energy to financial education, non-profits to retail.</Typography>
        </Grid>
      </Grid>
    </Section>
    )
}