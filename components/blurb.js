import { Grid, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blurb = props => {
  return (
    <Box border={props.special ? 1 : 0} borderColor="primary.main">
      <Box className={"icon major style" + (props.idx % 5 + 1)} mx="auto" mb={3} width="12rem" height="12rem" py="3rem">
        <FontAwesomeIcon icon={props.icon} size="6x" fixedWidth />
      </Box>
      <Typography component="h3" variant="h4" gutterBottom>{props.name}</Typography>
      {props.children}
    </Box>
  );
}

export default Blurb;