import { Box, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from "../components/section";
import SectionHeader from "../components/section-header";

import skills from "../content/skills.js";

export default function SkillsInterests() {
  return (
    <Section>
      <a id="skills" aria-hidden="true" />
      <SectionHeader>Skills &amp; interests</SectionHeader>
      <Grid container spacing={8} justify="space-between">
        {skills.map((category, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography component="h3" variant="h5" gutterBottom>{category.title}</Typography>
            <Typography component="ul" className="alt">
              {category.skills.map((skill, j) => (
                <Typography component="li" key={j}>
                  <FontAwesomeIcon icon={skill.icon} className={`icon style${i+j+1}`} fixedWidth />
                  {" "}{skill.name}
                </Typography>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box mt={3}>
        <Typography paragraph><em>Have a requirement you don't see here?</em> Just ask &ndash; I may have left it off the list for brevity, but I'm also a quick learner!</Typography>
      </Box>
    </Section>
  )
}