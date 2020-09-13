import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const Skill = props => {
  return (
    // <Grid item m zeroMinWidth>
    //   <Card>
    //     <CardContent>
    //       <Typography noWrap>
    //         <h3>{props.name}</h3>
    //         <p>{props.description}</p>
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </Grid>
    <Grid item md>
      <Card>
        <CardContent>
          {props.name}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Skill;