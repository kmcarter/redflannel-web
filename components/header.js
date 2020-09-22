import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Link from "./link";

export default function Header(props) {
  // TODO: This is hokey, but will do for now.
  const theme = useTheme();
  const isLgOrUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedOrUp = useMediaQuery(theme.breakpoints.up('md'));
  const isXSmallOrDown = useMediaQuery(theme.breakpoints.down('xs'));
  const pt = props.alt ? 15 : (isMedOrUp ? 20 : 10);
  const pb = props.alt ? 10 : (isMedOrUp ? 15 : 10);
  const px = isLgOrUp ? 15 : (isXSmallOrDown ? 1 : 10);

  return (
    <Box id="header" component="header" color="primary.contrastText" className={"alt" + (props.alt ? " interior" : "")} px={px} pt={pt} pb={pb} textAlign="center">
      {!props.alt &&
        <>
          <Typography component="h1" variant="h1" color="textSecondary">
            <Box width={isMedOrUp ? "60%" : "100%"} className="logo image">
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