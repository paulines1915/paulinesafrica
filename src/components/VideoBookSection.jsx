import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Player } from 'video-react';

function VideoBookSection() {
  return (
    <div className="m-3">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8} className="">
          <Card>
            <iframe
              //   width="580"
              height="323"
              src="https://www.youtube.com/embed/f7iAza3DMRg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        </Col>
        <Col xs={6} md={4} className="">
          <Card className="p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            amet id consequuntur perspiciatis obcaecati! Voluptatibus inventore
            nihil fugiat at, delectus nostrum facere facilis expedita soluta
            labore, fugit esse. Dolorum, dolor!
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VideoBookSection;
