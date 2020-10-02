import Box from "@material-ui/core/Box"

export default function Section(props) {
  return (
    <Box component="section" className={"main" + (props.special ? " special" : "")}>
      <a id={props.id} name={props.id} aria-hidden="true" />
      {props.children}
    </Box>
  )
}