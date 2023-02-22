import { Container, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Helmet } from "react-helmet";

function ColorSchemesExample() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            href="/"
            className="navbar-brand mb-0 h1"
            style={{ fontSize: "1.4rem" }}
          >
            ToBeFit{" "}
            <img
              className="d-inline-block "
              src="https://cdn.icon-icons.com/icons2/3551/PNG/512/water_bottle_dumbbell_gym_fitness_icon_224863.png"
              width="40"
              height="40"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/exercises">All Exercises</Nav.Link>
              <Nav.Link href="/exercises/new">Add Exercise</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="/shop/Protein">
                  Protein
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/Vitamins">
                  Vitamins
                </NavDropdown.Item>
                <NavDropdown.Item href="/shop/equipment-accessories">
                  Equipment & Accessories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
