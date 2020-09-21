import Box from "@material-ui/core/Box"

export default function Section(props) {
  return (
    <Box component="section" className={"main" + (props.special ? " special" : "")}>
      {props.children}
    </Box>
  )
}