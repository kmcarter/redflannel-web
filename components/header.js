import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPastafarianism, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  const pt = props.alt ? 15 : 20;
  const pb = props.alt ? 10 : 15;

  let icon = <FontAwesomeIcon icon={faPastafarianism} size="2x" />;
  if (props.alt) {
    icon = <Link href="/" title="Back to homepage" color="textSecondary"><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" /></Link>;
  }

  return (
    <Box id="header" component="header" color="primary.contrastText" className={"alt" + (props.alt ? " interior" : "")} px={15} pt={pt} pb={pb} textAlign="center">
      <Box className="logo">
        {icon}
      </Box>
      <Typography component="h1" variant="h1" color="textSecondary">{props.h1}</Typography>
      {props.children &&
        <Typography component="p" variant="subtitle1">{props.children}</Typography>
      }
    </Box>
  )
}