import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

function PublishSection() {
  return (
    <div className="container ">
      <Card className="text-center border-0 rounded-0 publish-bg mb-4">
        <Card.Body>
          <Row className="mt-5 pt-5">
            <Col style={{ paddingLeft: 0 }} className="text-uppercase ms-auto">
              <a
                href="https://www.youtube.com/watch?v=GIV-sfAva00&t=1s"
                className="bg-main text-white px-2 py-1"
                target="_blank"
                rel="noreferrer"
              >
                Publish with us
              </a>
            </Col>
            <Col>
              <a
                className="bg-white text-dark px-2 py-1"
                href="https://www.youtube.com/watch?v=GIV-sfAva00&t=1s"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PublishSection;
