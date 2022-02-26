import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';

function ObjectiveSection() {
  return (
    <Container>
      <Card className="border-0">
        <Card.Body >
          <Card.Title className="text-maroon">General Objective</Card.Title>
          <Card.Text className="text-center">
            Paulines Books and Audio-visuals is an activity of the Daughters of
            St Paul, an international religious congregation using the
            communications media to spread the Gospel message and to promote the
            dignity of all people. The mission of the Daughters of St Paul is to
            be at the service of evangelisation through the means of social
            communications: “To do the charity of the truth” according to
            Blessed James Alberione, their founder. Paulines’ strategies and
            priorities are set according to the needs of the people and
            following the directives of the Congregation and the Church,
            particularly the African Church. Paulines Africa publishes and
            produces Books and Audio-visuals materials based on the Bible
            catechesis, the teaching of the Church, formation to justice and
            peace, life education and literature for children.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ObjectiveSection;
