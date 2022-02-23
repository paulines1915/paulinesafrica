import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-white sticky"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img src={logo} alt="Paulines" style={{ width: 7 + `rem` }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav fill defaultActiveKey="/home">
            <NavLink to="/home" className="text-dark d-block py-2 px-3">
              Home
            </NavLink>
            <NavDropdown title="Who We Are" id="collasible-nav-dropdown">
              <NavLink to="/about" className="text-dark d-block py-2 px-3">
                About
              </NavLink>
              <NavLink to="/founders" className="text-dark d-block py-2 px-3">
                Founders
              </NavLink>
              <NavLink to="/history" className="text-dark d-block py-2 px-3">
                Our History
              </NavLink>
              <NavLink
                to="/spirituality"
                className="text-dark d-block py-2 px-3"
              >
                Our Spirituality
              </NavLink>
              <NavLink to="/mission" className="text-dark d-block py-2 px-3">
                Pauline Mission
              </NavLink>
              <NavLink
                to="/cooperators"
                className="text-dark d-block py-2 px-3"
              >
                Pauline Cooperators
              </NavLink>
            </NavDropdown>
            <Nav.Link
              href="http://www.e.paulinesafrica.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online Shop
            </Nav.Link>
            <Nav.Link
              href="http://www.young.paulinesafrica.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vocations
            </Nav.Link>
            <Nav.Link href="/donations">Donations</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
