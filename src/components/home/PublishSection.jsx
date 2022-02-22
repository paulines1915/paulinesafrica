import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

function PublishSection() {
  return (
    <div className="container ">
      <Card className="text-center border-0 rounded-0  mb-4">
        <Card.Body className='publish-bg'>
          <Row className="p-5">
            <Col sm={8} style={{ paddingLeft: 0 }} className="text-uppercase ms-auto">
              <a
                href="https://www.youtube.com/watch?v=GIV-sfAva00&t=1s"
            
                target="_blank"
                rel="noreferrer"
              >
                Publish with us
              </a>
            </Col>
            <Col sm={4} >
              <a
               
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
