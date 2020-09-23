import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Section from "../components/section";
import SectionHeader from "../components/section-header";
import Testimonial from "../components/testimonial";

import testimonials from "../content/testimonials";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(4, 0)
  }
}));

export default function Testimonials(props) {
  const classes = useStyles();
  return (
    <Section>
      <SectionHeader>High praise</SectionHeader>
      {testimonials.map((testimonial, i) => {
        return (
          <>
            <Testimonial {...testimonial} />
            {i < testimonials.length - 1 && <Divider className={classes.divider} />}
          </>
        );
      })}
    </Section>
  )
}