import Container from "@material-ui/core/Container";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <Container>
      {props.children}
      <Footer />
    </Container>
  )
}