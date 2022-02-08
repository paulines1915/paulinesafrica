import React from 'react';

import { Card, Button } from 'react-bootstrap';

function ObjectiveSection() {
  return (
    <div>
      <Card className="text-center m-3 px-5 border-0">
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <Card.Title className="text-maroon">General Objective</Card.Title>
          <Card.Text>
            General Objective Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card.Text>
          <Button className="bg-main">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ObjectiveSection;
