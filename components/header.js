import { Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Link from "./link";

export default function Header(props) {
  const pt = props.alt ? 15 : 20;
  const pb = props.alt ? 10 : 15;

  return (
    <Box id="header" component="header" color="primary.contrastText" className={"alt" + (props.alt ? " interior" : "")} px={15} pt={pt} pb={pb} textAlign="center">
      {!props.alt &&
        <>
          <Typography component="h1" variant="h1" color="textSecondary">
            <Box className="logo">
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