import React from 'react';
import { Col, Card, Row, Image } from 'react-bootstrap';
import book5 from '../../assets/book5.png';

function VideoBookSection() {
  return (
    <div className="p-3">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className="">
        <Col xs={12} md={7} className="p-0 m-0">
          <Card className="container-fluid m-0 mb-xs-5 border-0 ">
            <iframe
              height="355"
              // width="500"
              className="w-90"
              src="https://www.youtube.com/embed/f7iAza3DMRg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </Col>
        <Col
          xs={4}
          md={5}
          className="mt-sx-4 mt-sm-4 mt-md-0 book px-5"
          // style={{ width: 355 + 'px' }}
        >
          {/* <Card className=""> */}
          <Card.Img src={book5} style={{ width: 267 + 'px' }} id={book5} />
          {/* </Card> */}
        </Col>
      </Row>
    </div>
  );
}

export default VideoBookSection;
