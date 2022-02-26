import React from 'react';

import {Row, Col, Container } from 'react-bootstrap';

function PublishSection() {
  return (
    <Container className=''>    
          <Row className="p-5 mb-3 m-2 publish-bg">
            <Col style={{ paddingLeft: 0 }} className="text-uppercase ms-auto">
              <a
                href="https://www.youtube.com/watch?v=GIV-sfAva00&t=1s"
            
                target="_blank"
                rel="noreferrer"
                className='text-white font-header h2'
              >
                Publish with us
              </a>
            </Col>
            <Col>
              <a
               
                href="https://www.youtube.com/watch?v=GIV-sfAva00&t=1s"
                target="_blank"
                rel="noreferrer"
                className='btn btn-info'
              >
                Learn More
              </a>
            </Col>
          </Row>      
    </Container>
  );
}

export default PublishSection;
