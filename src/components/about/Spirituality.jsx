import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

import spirit1 from '../../assets/spirit1.jpg';
import spirit2 from '../../assets/spirit2.png';
import spirit3 from '../../assets/spirit3.png';

function Spirituality() {
  return (
    <div>
      <Card className="text-center p-md-3 border-0">
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <div className="bg-light py-5">
            {' '}
            <h1>Our Spirituality</h1>
          </div>
          <Card.Title className="text-maroon my-4">
            Pauline Spirituality
          </Card.Title>
          <Row className="mb-4" xs={1} md={2}>
            <Col>
              <Card.Title className="text-maroon">
                JESUS MASTER: Way, Truth and Life
              </Card.Title>
              <Card.Text className="text-start">
                About us Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Card.Text>
            </Col>
            <Col>
              {' '}
              <Card.Img
                src={spirit1}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
          </Row>

          <Row className="mb-4" xs={1} md={2}>
            <Col>
              {' '}
              <Card.Img
                src={spirit2}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
            <Col>
              <Card.Title className="text-maroon">
                Mary Queen of the Apostles
              </Card.Title>
              <Card.Text className="text-end">
                About us Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Card.Text>
            </Col>
          </Row>
          <Row className="mb-1" xs={1} md={2}>
            <Col>
              <Card.Title className="text-maroon">St Paul Apostle</Card.Title>
              <Card.Text className="text-start">
                About us Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </Card.Text>
            </Col>
            <Col>
              {' '}
              <Card.Img
                src={spirit3}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Spirituality;
