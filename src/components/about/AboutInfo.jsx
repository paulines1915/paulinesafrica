import React from 'react';

import { Card } from 'react-bootstrap';

function AboutInfo() {
  return (
    <div>
      <Card className="text-center p-md-5 border-0 m-5 shadow">
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            About us Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutInfo;
