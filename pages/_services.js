import { Grid, Typography } from "@material-ui/core";
import { faCode, faLaptopCode, faUsers, faComments, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import Section from "../components/section";
import SectionHeader from "../components/section-header";
import Blurb from '../components/blurb';

export default function Services() {
  return (
    <Section special>
      <SectionHeader>Services</SectionHeader>
      <Grid container spacing={8} justify="space-between">
        <Grid item xs={12} md={4}>
          <Blurb idx={1} icon={faCode} name="Custom development">
            <Typography paragraph>From API integrations to custom themes, I can whatever whatever</Typography>
          </Blurb>
        </Grid>
        <Grid item xs={12} md={4}>
          <Blurb idx={3} icon={faLaptopCode} name="Website build">
            <Typography paragraph>Whether you need a refresh or are jumpstarting a new brand, I can build custom or templated websites.</Typography>
          </Blurb>
        </Grid>
        <Grid item xs={12} md={4}>
          <Blurb idx={4} icon={faComments} name="Consulting">
            <Typography paragraph>Troubleshooting, research, and answering that basic, perennial question: 'is it possible to...?'</Typography>
          </Blurb>
        </Grid>
        <Grid item xs={12} md={4}>
          <Blurb idx={2} icon={faUsers} name="Team player">
            <Typography paragraph>If you need an extra set of hands for a project, I have part-time availability.</Typography>
          </Blurb>
        </Grid>
        <Grid item xs={12} md={8}>
          <Blurb special idx={4} icon={faExclamationTriangle} name="Note!">
            <Typography paragraph>I can be a short-term, less than 20 hours/week contract hire or work as a consultant on your project. I'm happy to onboard with the rest of your team and lend a hand or work alone. Billing practices are flexible: by the hour or by the project. <strong>Please note that I currently only have part time availability.</strong></Typography>
          </Blurb>
        </Grid>
      </Grid>
    </Section>
  );
}