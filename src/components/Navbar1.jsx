import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagen_logo from '../logo.png'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function BasicExample() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
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
              <NavDropdown.Item to="/AboutH" as={NavLink}>About Heikala</NavDropdown.Item>
              <NavDropdown.Item to="/Shipping" as={NavLink}>
                Shipping
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button style= {{width: "3rem", height: "3rem", position:"relative"}} variant= "outline-secondary" classname="rounded-circle" >
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >2
            </div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;