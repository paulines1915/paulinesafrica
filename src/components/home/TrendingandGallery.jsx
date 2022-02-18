import React from "react";

import { Card, Row, Col, Container } from "react-bootstrap";

import icon1 from "../../assets/resources.png";
import icon2 from "../../assets/gallery.png";

const icons = [
 
  {
    icon: icon1,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1686",
  },
  {
    icon: icon2,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1686",
  },
  {
    icon: icon2,
    href: " https://e.paulinesafrica.org/index.php/book/bookDetails/1687",
  },
];

function TrendingandGallery() {
  return (
    <Container>
       <Card
        className="text-center border-0"
      >
        <Card.Body className="m-3">
          <Row xs={1} sm={2} md={3} className="g-4">
            {icons.map((url) => (
              <Col key={url.icon}>
                <Card.Img
                  variant="top"
                  src={url.icon}
                  style={{ width: 221 + 'px' }}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
      );
}

export default TrendingandGallery;
