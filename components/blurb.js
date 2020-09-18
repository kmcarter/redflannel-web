import { Grid, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blurb = props => {
  return (
    <Grid item xs={12} md={6}>
      <Box className={"icon major style" + (props.idx % 5 + 1)} mx="auto" mb={3} width="12rem" height="12rem" py="3rem">
        <FontAwesomeIcon icon={props.icon} size="6x" fixedWidth />
      </Box>
      <Typography component="h3" variant="h4" gutterBottom>{props.name}</Typography>
      {props.children}
    </Grid>
  );
}

export default Blurb;