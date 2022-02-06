import React from 'react';
import { Col, Card, Row, Image } from 'react-bootstrap';
import book5 from '../assets/book5.png';

function VideoBookSection() {
  return (
    <div className="m-3">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={9} className="">
          <Card>
            <iframe
              height="323"
              src="https://www.youtube.com/embed/f7iAza3DMRg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </Col>
        <Col xs={4} md={2} className="mt-xs-5 mt-md-0 book">
          <Card>
            <Card.Img
              variant="top"
              src={book5}
              style={{ width: 14.3 + 'rem' }}
              fluid="true"
              id={book5}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VideoBookSection;
