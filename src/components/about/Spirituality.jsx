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
          <Card.Title className="text-maroon my-4 text-uppercase">
            Pauline Spirituality
          </Card.Title>
          <Card.Text className="">
            The heart of the Pauline spirituality is Jesus Master, Way, Truth
            and Life. Living in him, we enthusiastically proclaim his Gospel.
            Our spirituality is complete because it leads the whole person mind,
            will, heart, body and physical energies to God. We are striving to
            reach the same goal as the Apostle Paul: "It is no longer I who live
            but Christ who lives in me". To attain this objective, we draw light
            and support from the Eucharist, the Word of God, daily prayer and
            fraternal communion all of which give us the strength we need to
            carry out our many-faceted apostolate. They are also the fonts that
            help us discern the signs of the times so as to respond to the needs
            of the Church and world.
          </Card.Text>
          <Card.Text className="mb-5">
            Modeling ourselves on Mary, whom we honor as the Queen of Apostles
            and of every apostolate, we bring Jesus to all humanity with great
            fervor, proclaiming the Truth that saves, the Way that leads to the
            Father, and his Life of grace.
          </Card.Text>
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
