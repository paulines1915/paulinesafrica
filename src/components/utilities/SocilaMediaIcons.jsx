import React from 'react';

import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from 'react-icons/fa';

import { Row, Col, Link } from 'react-bootstrap';

function SocilaMediaIcons() {
  return (
    <div>
      <Row xs={12}>
        <Col>
          <a href="#" className="m-2">
            {' '}
            <FaWhatsapp />
          </a>
          <a href="#" className="m-2">
            {' '}
            <FaInstagram />
          </a>

          <a href="#" className="m-2">
            <FaTwitter />
          </a>
          <a href="#" className="m-2">
            <FaFacebookF />
          </a>
          <a href="#" className="m-2">
            {' '}
            <FaLinkedin />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default SocilaMediaIcons;
