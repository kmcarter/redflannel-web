import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from "../components/section";
import SectionHeader from "../components/section-header";

import skills from "../content/skills.js";

export default function SkillsInterests() {
  return (
    <Section>
      <SectionHeader>Skills &amp; interests</SectionHeader>
      <Grid container spacing={8} justify="space-between">
        {skills.map((category, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography component="h3" variant="h5" gutterBottom>{category.title}</Typography>
            <Typography component="ul" className="alt">
              {category.skills.map((skill, j) => (
                <Typography component="li" key={j}>
                  <FontAwesomeIcon icon={skill.icon} fixedWidth />
                  {" "}{skill.name}
                </Typography>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}