import React from 'react';

import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import logo from '../../assets/logo.png';
import SocilaMediaIcons from './SocilaMediaIcons';

function Footer() {
  return (
    <footer className="footer">
      <Card className="p-0 border-0">
        <div className="overlay">
          <h1>We are here for anytime everyday</h1>
          <Button>Get n touch</Button>
        </div>
        <Card.Body className="bg-main text-light">
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={12} md={4}>
              <ul className="list-unstyled">
                <li>
                  <img className="logo" src={logo} alt="log" />
                </li>
                <li>
                  <address className="text-left">
                    You can contact us at{' '}
                    <a href="http://www.somedomain.com/contact">
                      www.somedomain.com
                    </a>
                    .<br />
                    Phone: <a href="tel:+254745618055">+254 745 618 055</a>
                    .<br />
                    If in need of help, please{' '}
                    <a href="mailto:paulines1915@gmail.com">contact admin</a>
                    .<br />
                    <br />
                    You may also want to visit us:
                    <br />
                    Pualine Sisters
                    <br />
                    331 E Evelyn Ave
                    <br />
                    Mountain View, CA 94041
                    <br />
                    Kenya
                  </address>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul className="list-unstyled">
                <li>
                  {' '}
                  <h1>Site map</h1>
                </li>
                <li>Home</li>
                <li>Who we are</li>
                <li>Vocations</li>
                <li>Donations</li>
                <li>Resources</li>
                <li>Events</li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <ul className="list-unstyled">
                <li>
                  {' '}
                  <h1>Get up to date news from us</h1>
                </li>
                <li>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button as={Col} variant="primary" type="submit">
                      Submit
                    </Button>
                  </Row>
                  <SocilaMediaIcons />
                </li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default Footer;
