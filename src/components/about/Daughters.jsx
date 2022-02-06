import React from 'react';

import { Row, Col, Card, Button } from 'react-bootstrap';

import book1 from '../../assets/book1.png';
import book6 from '../../assets/book6.png';

const images = [
  { book: book1, padding: `paddingTop:${1}rem` },
  { book: book6, padding: `paddingBottom:${1}rem` },
];

function Daughters() {
  return (
    <div className="container mb-5">
      <h1>Daughters of St Paul in the World</h1>
      <Row xs={12} md={2} className="g-4 bookcenter p-0">
        {images.map((url, idx) => (
          <Col
            className="m-2 p-2"
            style={{ width: 20 + 'rem', margin: `${0} auto` }}
          >
            <Card className="m-3 p-3 ">
              <Card.Img variant="top" src={url.book} />
              <Card.Body>
                <Button className="px-3">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Daughters;
