import React from 'react';

import { Row, Col, Card, Button } from 'react-bootstrap';

import book1 from '../../assets/book1.png';
import book6 from '../../assets/book6.png';
import book5 from '../../assets/book5.png';
import book4 from '../../assets/book4.png';

const images = [
  { book: book1, padding: `paddingTop:${1}rem` },
  { book: book6, padding: `paddingBottom:${1}rem` },
  { book: book5, padding: `paddingTop:${1}rem` },
  { book: book4, padding: `paddingBottom:${1}rem` },
  { book: book4, padding: `paddingBottom:${1}rem` },
  // { book: book4, padding: `paddingBottom:${1}rem` },
];

function BookCenter() {
  return (
    <div className="container">
      <h1>Our Book Centres</h1>
      <Row xs={12} md={2} className="g-4 bookcenter p-0">
        {images.map((url, idx) => (
          <Col
            className="m-0 p-0"
            style={{ width: 12 + 'rem', margin: `${0} auto` }}
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

export default BookCenter;
