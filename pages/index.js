import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Paper, BottomNavigation, BottomNavigationAction, AppBar, Toolbar } from '@material-ui/core';

import Header from "../components/header";

import Services from "./_services";
import About from "./_about";
import SkillsInterests from "./_skills";
import Testimonials from "./_testimonials";
import Contact from "./_contact";

export default function Home() {
  const [nav, goToNav] = React.useState(0);
  return (
    <>
      <Head>
        <title>Red Flannel Web Services</title>
      </Head>
      <Header h1="Red Flannel Web Services">A warmer approach to software development</Header>
      <Paper id="main">
        <AppBar id="nav" className="alt" component="nav" color="transparent" position="sticky">
          <Toolbar>
            <BottomNavigation value={nav} component="ul" onChange={(e, newValue) => { goToNav(newValue) }} style={{width: '100%'}}>
              <li><BottomNavigationAction label="Services" component="a" href="#services" value="services" showLabel /></li>
              <li><BottomNavigationAction label="About" component="a" href="#about" showLabel /></li>
              <li><BottomNavigationAction label="Skills &amp; Interests" component="a" href="#skills" showLabel /></li>
              <li><BottomNavigationAction label="Testimonials" component="a" href="#testimonials" showLabel /></li>
              <li><BottomNavigationAction label="Contact" component="a" href="#contact" showLabel /></li>
            </BottomNavigation>
          </Toolbar>
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