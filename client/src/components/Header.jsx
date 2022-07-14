import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-2">
        <Container>
          <Navbar.Brand href="#home">Streemz</Navbar.Brand>
          <Nav >
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/streams/show">Streams</Nav.Link>
            <GoogleAuth />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
