import React from 'react';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo.png';

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
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Who We Are" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/founders">Founders</NavDropdown.Item>
              <NavDropdown.Item href="/history">Our History</NavDropdown.Item>
              <NavDropdown.Item href="/spirituality">
                Our Spirituality
              </NavDropdown.Item>
              <NavDropdown.Item href="/mission">
                Pauline Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cooperators">
                Pauline Cooperators
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/shop">Online Shop</Nav.Link>
            <Nav.Link href="/vocations">Vocations</Nav.Link>
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
