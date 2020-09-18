import Head from 'next/head';
// import Typography from 'typography';
// import sternGroveTheme from 'typography-theme-stern-grove';
import { Box, Paper, Grid, Typography, Link } from '@material-ui/core';

// import styles from '../styles/Home.module.scss';

import Services from "./_services";
import About from "./_about";
import SkillsInterests from "./_skills";
import Contact from "./_contact";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Flannel Web Services</title>
      </Head>
      <Header h1="Red Flannel">A warmer approach to software development</Header>
      <Paper id="main">
        <Services />
        <About />
        <SkillsInterests />
        <Contact />
        {/* <Section special>
          <SectionHeader>Skills &amp; interests</SectionHeader>
          <Grid container spacing={8} justify="space-between" className="features">
            {skills.map((skill, i) => (
              <Blurb key={i} idx={i} {...skill} />
            ))}
          </Grid>
        </Section> */}
      </Paper>
    </>
  )
}