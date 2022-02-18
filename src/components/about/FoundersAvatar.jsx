import React from 'react';

import { Row, Col, Card, Button, Container } from 'react-bootstrap';

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
  { book: book4, padding: `paddingBottom:${1}rem` },
];

function FoundersAvatar() {
  return (
    <Container>
      <Row
        xs={1}
        md={3}
        className="g-4"
        // style={{ maxWidth: 25 + 'rem', margin: 2 + `rem auto` }}
      >
        {images.map((url, idx) => (
          //   <div style={{ maxWidth: 10 + 'rem', margin: 2 + `rem auto` }}>
          <Col key={idx}>
            <Card className="m-3 rounded-0">
              <Card.Img
                variant="top"
                src={url.book}
                className="rounded-circle py-3 px-3"
                style={{ maxWidth: 10 + 'rem', margin: 0 + ` auto` }}
              />
              <Card.Body>
                <Button className="px-5 bg-main">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          //   </div>
        ))}
      </Row>
    </Container>
  );
}

export default FoundersAvatar;
