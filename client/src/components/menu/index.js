import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu({ onClickHomepage, onClickOrbitalElements }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="/astronomy-logo2.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={onClickHomepage}>Inicio</Nav.Link>
            <NavDropdown title="Efemerides" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">
                Eventos diarios
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Datos" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={onClickOrbitalElements}>
                Parámetros Orbitales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
