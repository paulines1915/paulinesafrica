import React from "react";

import { Row, Col, Card, Form, Button } from "react-bootstrap";

import { FaFax, FaPhoneAlt, FaMobile, FaEnvelope } from "react-icons/fa";

import FormModal from "../home/FormModal";
import Map from "./Map";
import SocilaMediaIcons from "./SocilaMediaIcons";

function Footer() {
  return (
    <footer className="footer">
      <Card className="p-0 border-0">
        <div className="overlay">
          <h1>Discerning your vocation?</h1>
          <FormModal />
        </div>
        <Card.Body className="bg-main text-light">
          <Row>
            <Row className="text-center container">
              <h1>Subscribe to our Monthly Newsletter</h1>

              <Col className="mb-3 ml-3">
                <Form.Group controlId="formGridEmail" id="center">
                  <Form.Control
                    style={{ width: 20 + "vw", margin: 0 + "auto" }}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Col className="mb-3 m-3 d-inline-block">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Col>
            </Row>
            <Col xs={12} md={2}>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <h1>Contact us</h1>
                </li>
                <li>
                  <address className="text-left">
                    Daughters of St Paul
                    <br />
                    P.O. Box 49026 00100
                    <br />
                    Nairobi GPO(Kenya)
                    <br />
                    <FaPhoneAlt />
                    Tel: <a href="tel:(020)44447202/03">(020) 44447202/03</a>
                    .<br />
                    <FaFax />
                    Fax: <a href="fax:4442097">4442097</a>
                    .<br />
                    <FaMobile /> Mob:{" "}
                    <a href="tel:+254727736621">+254 727 736 621</a>
                    .<br />
                    <FaEnvelope /> Email:{" "}
                    <a href="mailto:publications@paulinesafrica.org">
                      publications@paulinesafrica.org
                    </a>
                    .<br />
                  </address>
                </li>
              </ul>
            </Col>
            <SocilaMediaIcons />
            <Col xs={12} md={2}>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <h1>Daughters of St Paul</h1>
                </li>
                <li>Who we are</li>
                <li>Founders</li>
                <li>Our history</li>
                <li>our spirituality</li>
                <li>our mission</li>
                <li>Pauline cooperators and Events</li>
                <li>
                  {" "}
                  <a href="www.paoline.org">News</a>{" "}
                </li>
              </ul>
            </Col>
            <Col xs={12} md={2}>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <h1>Quick Links</h1>
                </li>
                <li>
                  <a
                    href="http://www.paoline.org "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paoline Organization
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.e.paulinesafrica.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Online Shop
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.young.paulinesafrica.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vocations
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4}>
              <h1>Location</h1>
              <Map />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default Footer;
