import React from 'react';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar-bg" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Paulines" style={{ width: 7 + `rem` }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav fill defaultActiveKey="/home">
            <Nav.Link href="/home">Home</Nav.Link>

            <NavDropdown title="Who We Are" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Founders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Our History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Our Spirituality
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Pauline Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
                Pauline Cooperators
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Online Shop</Nav.Link>
            <Nav.Link href="#pricing1">Vocations</Nav.Link>
            <Nav.Link href="#pricing2">Donations</Nav.Link>
            <Nav.Link href="#pricing3">Resources</Nav.Link>
            <Nav.Link href="#pricing4">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div className="nav-bar-bg p-3">
    //   <Nav justify variant="pills" defaultActiveKey="/home" as="ul">
    //     <Nav.Item as="li">
    //       <Nav.Link href="/home">Home</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-1" href="/about">
    //         Who we are
    //       </Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-3">Online Shop</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-4">Vocations</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-5">Donations</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-6">Resources</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item as="li">
    //       <Nav.Link eventKey="link-7">Events</Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // </div>
  );
}

export default Header;
