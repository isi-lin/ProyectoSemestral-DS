import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagen_logo from '../logo.png'
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <img
              alt=""
              src={imagen_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <Navbar.Brand to="/" as={NavLink}>Heikala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link href="https://www.instagram.com/heikala/" target="_blank" rel="noopener noreferrer">Instagram</Nav.Link>
            <Nav.Link to="/Colaborations" as={NavLink}>Colaborations</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item to="/Prints" as={NavLink}>Prints</NavDropdown.Item>
              <NavDropdown.Item to="/ArtSupplies" as={NavLink}>Art Supplies</NavDropdown.Item>
              <NavDropdown.Item to="/Books" as={NavLink}>Books</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item to="/AboutHeikala" as={NavLink}>About Heikala</NavDropdown.Item>
              <NavDropdown.Item to="/Shipping" as={NavLink}>
                Shipping
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;