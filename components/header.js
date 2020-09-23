import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Link from "./link";

const useStyles = makeStyles((theme) => ({
  alt: {
    [theme.breakpoints.up("lg")]: {
      paddingX: theme.spacing(15)
    },
    [theme.breakpoints.up("md")]: {
      paddingX: theme.spacing(10),
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(15)
    },
    [theme.breakpoints.down("sm")]: {
      paddingX: theme.spacing(1),
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  interior: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  },
  logo: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60%"
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <Box id="header" component="header" color="primary.contrastText" className={classes.alt + (props.alt ? classes.interior : "")} textAlign="center">
      {!props.alt &&
        <>
          <Typography component="h1" variant="h1" color="textSecondary">
            <Box className={classes.logo + " image"}>
              <img src="/RF_logo_master-01.png" alt={props.h1} />
            </Box>
          </Typography>
        </>
      }
      {props.alt &&
        <>
          <Box className="logo">
            <Link href="/" title="Back to homepage" color="textSecondary" underline="none"><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" /></Link>
          </Box>
          <Typography component="h1" variant="h1" color="textSecondary">{props.h1}</Typography>
        </>
      }
      {props.children &&
        <Typography component="p" variant="subtitle1">{props.children}</Typography>
      }
    </Box>
  )
}