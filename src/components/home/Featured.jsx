import React from "react";

import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

import { Card, Row, Col } from "react-bootstrap";
import book1 from "../../assets/featured-1.png";
import book2 from "../../assets/featured-2.png";
import book3 from "../../assets/featured-3.png";
import book4 from "../../assets/featured-4.png";
import book5 from "../../assets/featured-5.png";
import book6 from "../../assets/featured-6.png";
import book7 from "../../assets/featured-7.jpg";

const images = [
  {
    book: book1,
    padding: `paddingTop:${1}rem`,
    href: " https://e.paulinesafrica.org/index.php/book/bookDetails/1687",
  },
  {
    book: book2,
    padding: `paddingBottom:${1}rem`,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1686",
  },
  {
    book: book3,
    padding: `paddingTop:${1}rem`,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1685",
  },
  {
    book: book4,
    padding: `paddingBottom:${1}rem`,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1690",
  },
  {
    book: book5,
    padding: `paddingBottom:${1}rem`,
    href: "https://e.paulinesafrica.org/index.php/book/bookDetails/1692",
  },
  {
    book: book6,
    padding: `paddingBottom:${1}rem`,
    href: " https://e.paulinesafrica.org/index.php/book/bookDetails/1589",
  },
  {
    book: book7,
    padding: `paddingBottom:${1}rem`,
    href: "https://anyflip.com/sckn/maik",
  },
];

function Featured() {
  return (
    <div className="container">
      <Card className="text-center border-0">
        <Card.Title className="bg-white text-maroon">Featured Books</Card.Title>
        <Card.Body className="m-3">
          <Row xs={12} md={12} className="g-4 bg-light">
            {images.map((url) => (
              <Col
                className="alternate-padding book"
                key={url.book}
              
              >
                <a href={url.href} target="_blank">
                  <Tilt
                  options={{ scale: 2, max: 50, glare: true, perspective:1000, transition:        true }}
                    className="py-5 shadow"
                    style={{ width: 0 + "px", margin: 0 + "auto" }}
                  >
                    <Card.Img
                      variant="top"
                      src={url.book}
                      style={{ width: 60 + "px" }}
                      // className="shadow"
                    />
                  </Tilt>
                </a>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Featured;
