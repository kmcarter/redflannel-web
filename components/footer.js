import { Typography, Grid, Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';

import Link from "./link";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6),
    }
  },
  footerLogo: {
    maxWidth: "100%"
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <Box id="footer" component="footer" color="secondary.contrastText" className={classes.footer}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} component="section">
          <Typography component="h2" variant="h4" color="textSecondary" gutterBottom>The fineprint</Typography>
          <Typography paragraph>
            Want to see a code sample? Interested in how this site was built? Check out the <Link href="/imprint" color="textSecondary">imprint</Link>.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="section">
          <Typography component="h2" variant="h4" color="textSecondary" gutterBottom>Find Kelly elsewhere</Typography>
          <Box py={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={2}>
                <Link href="https://www.linkedin.com/in/kellycarterit/" className="icon alt" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link href="https://github.com/kmcarter" className="icon alt" target="_blank">
                  <FontAwesomeIcon icon={faGithub} fixedWidth />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link href="https://www.instagram.com/catakellysm/" className="icon alt" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </Link>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Link href="https://twitter.com/kellycodes" className="icon alt" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className="copyright" align="center">
            <img src="/RF_logo_footer.png" alt="Red Flannel Web Services" className={classes.footerLogo} />
          </Typography>
          <Typography paragraph variant="caption" className="copyright" align="center">
            &copy; {year} &bull; <Link href="/privacy" color="inherit">Privacy Policy</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}