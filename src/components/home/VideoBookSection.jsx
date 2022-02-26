import React from "react";
import { Col, Card, Row, Container } from "react-bootstrap";
import book5 from "../../assets/book-of-the-month.png";

function VideoBookSection() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={7}>
          <Card className="container-fluid m-0 mb-xs-3 border-0 ">
            <iframe
              height="355"
              // width="500"
              className="mb-2"
              src="https://www.youtube.com/embed/f7iAza3DMRg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="mt-sx-4 mt-sm-4 mt-md-0 mb-2 book px-5"
          // style={{ width: 355 + 'px' }}
        >
          <Card className="mt-sx-2 border-0 rounded-0">
            <Card.Img
              src={book5}
              id={book5}
              style={{ maxHeight: 355 + "px", width: 100 + "%" }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoBookSection;
