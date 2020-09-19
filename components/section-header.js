import { Box, Typography } from "@material-ui/core";

export default function SectionHeader(props) {
  return (
    <Box component="header" className="major">
      <Typography component="h2" variant="h2">{props.children}</Typography>
    </Box>
  );
}