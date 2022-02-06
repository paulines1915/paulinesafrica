import React from 'react';

import { Card, Button } from 'react-bootstrap';

function ObjectiveSection() {
  return (
    <div>
      <Card className="text-center m-3 px-5">
        <Card.Body className="m-3">
          <Card.Title>General Objective</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quas
            itaque suscipit nisi, enim culpa ab voluptatem repellendus deleniti
            eveniet veritatis molestiae sequi voluptatum mollitia odit dolorum
            qui dolores amet?
          </Card.Text>
          <Button className="bg-main">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ObjectiveSection;
