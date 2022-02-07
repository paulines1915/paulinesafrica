import React from 'react';

import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className="bg-main p-3">
      <Nav justify variant="pills" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" href="/about">
            Who we are
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3">Online Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-4">Vocations</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-5">Donations</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-6">Resources</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-7">Events</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
