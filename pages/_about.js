import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from "../components/link";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

const useStyles = makeStyles((theme) => ({
  avatar: {
    maxWidth: "40%",
    width: "auto",
    height: "100%",
    padding: theme.spacing(1),
    margin: "0 0 1rem 1.5rem",
    float: "right",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      margin: "0 0 1rem",
      float: "none"
    }
  }
}));

export default function About() {
  const classes = useStyles();
  return (
    <Section id="about">
      <SectionHeader>About Kelly</SectionHeader>
          <Typography paragraph>
            <Avatar component="span" src="/kelly.jpg" alt="Kelly" className={classes.avatar} />
            Hi, I'm Kelly, the developer behind Red Flannel. I specialize in web application development, but I am a versatile software engineer. With over a decade of  practical work experience, I focus on building high-quality solutions with an appreciation for detail and craftsmanship often missing in the freelance industry.
          </Typography>
          <Typography paragraph>I particularly enjoy building in C#, React, and Python for projects, organizations, or individuals that are focused on doing social good or deemphasize profit as their singular goal. I am committed to good communication, honesty, and successful project completion. I use <Link href="https://www.mypronouns.org/they-them" target="_blank" rel="noopener">they/them/their pronouns</Link>.</Typography>
          <Typography paragraph>Red Flannel is an LGBTQ-owned business located on unceded territory of the <Link href="https://native-land.ca/maps/territories/duwamish/" target="_blank" rel="noopener">Duwamish peoples</Link> in Seattle, Washington, but I have many years of experience working remotely for clients all over the world. I have produced work for a variety of industries, including retail/eCommerce, finance, education, non-profits, and more. I've worked with marketing managers, researchers, graphic designers, consulting agencies, therapists, small businesses, website designers, artists, and so many more.</Typography>
    </Section>
    )
}