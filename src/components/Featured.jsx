import React from 'react';

import { Card } from 'react-bootstrap';

function Featured() {
  return (
    <div className="m-3 ">
      <Card className="text-center ">
        <Card.Header>Featured</Card.Header>
        <Card.Body className="m-3">
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Featured;
