import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import book1 from '../assets/book1.png';
import book6 from '../assets/book6.png';
import book5 from '../assets/book5.png';
import book4 from '../assets/book4.png';

const images = [
  { book: book1, padding: `paddingTop:${1}rem` },
  { book: book6, padding: `paddingBottom:${1}rem` },
  { book: book5, padding: `paddingTop:${1}rem` },
  { book: book4, padding: `paddingBottom:${1}rem` },
  { book: book4, padding: `paddingBottom:${1}rem` },
  { book: book4, padding: `paddingBottom:${1}rem` },
];

function Featured() {
  return (
    <div className="m-3">
      <Card
        className="text-center border-0 bg-main"
        style={{ height: 15 + 'rem' }}
      >
        <Card.Header className="text-light">Featured Books</Card.Header>
        <Card.Body className="m-3">
          {/* <Card.Title>Special title treatment</Card.Title> */}

          <Row xs={6} md={6} className="g-4">
            {images.map((url) => (
              <Col className="alternate-padding book" key={url.book}>
                <Card.Img
                  variant="top"
                  src={url.book}
                  style={{ width: 5 + 'rem' }}
                />
              </Col>
            ))}
          </Row>

          {/* <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Featured;
