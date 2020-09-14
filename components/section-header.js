import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function SectionHeader(props) {
  return (
    <Box component="header" className="major">
      <Typography component="h2" variant="h2">{props.children}</Typography>
    </Box>
  );
}