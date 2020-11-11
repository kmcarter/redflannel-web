import { Grid, Typography, Avatar, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    }
  },
}));

export default function Testimonial(props) {
  const classes = useStyles();
  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <Typography component="blockquote" variant="body1">"{props.testimonial}"</Typography>
      </Grid>
      <Grid item xs={12} md={2} sm={4}>
        <Avatar alt={props.image ? props.name : ""} src={props.image} className={classes.avatar} />
      </Grid>
      <Grid item xs={12} md={3} sm={8}>
        <Typography paragraph>
          {props.name}<br/>
          {props.title}<br/>
          <Link href={props.url} target="_blank">{props.company}</Link>
        </Typography>
      </Grid>
    </Grid>
    </>
  )
}