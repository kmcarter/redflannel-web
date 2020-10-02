import React from 'react';
import Head from 'next/head';
import { scroller } from "react-scroll";
import { Paper, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Box } from '@material-ui/core';

import Header from "../components/header";

import Services from "./_services";
import About from "./_about";
import SkillsInterests from "./_skills";
import Testimonials from "./_testimonials";
import Contact from "./_contact";

export default function Home() {
  const onNavigate = (e, newValue) => {
    scroller.scrollTo(newValue, {
      duration: 500,
      offset: -100,
      smooth: true,
      spy: true
    })
  };

  return (
    <>
      <Head>
        <title>Red Flannel Web Services</title>
      </Head>
      <Header h1="Red Flannel Web Services">A warmer approach to software development</Header>
      <Paper id="main">
        <AppBar id="nav" className="alt" component="nav" color="transparent" position="sticky">
          <Box display={{ xs: 'none', md: 'block' }}>
            <Toolbar>
              <BottomNavigation onChange={onNavigate} showLabels style={{ width: '100%' }}>
                <BottomNavigationAction label="Services" component="a" href="#services" value="services" />
                <BottomNavigationAction label="About" component="a" href="#about" value="about" />
                <BottomNavigationAction label="Skills &amp; Interests" component="a" href="#skills" value="skills" />
                <BottomNavigationAction label="Testimonials" component="a" href="#testimonials" value="testimonials" />
                <BottomNavigationAction label="Contact" component="a" href="#contact" value="contact" />
              </BottomNavigation>
            </Toolbar>
          </Box>
        </AppBar>
        <Services />
        <About />
        <SkillsInterests />
        <Testimonials />
        <Contact />
      </Paper>
    </>
  )
}