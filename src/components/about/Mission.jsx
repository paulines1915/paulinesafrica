import React from 'react';
import { Card, Button } from 'react-bootstrap';
import HeroSection from '../utilities/HeroSection';
import FoundersAvatar from './FoundersAvatar';

function Mission() {
  return (
    <div>
      <HeroSection />
      <Card className="border-0 p-3">
        <Card.Title className="text-maroon">Pauline Mission</Card.Title>
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <Card.Text>
            The Daughters of St. Paul dedicate their lives to the Gospel. While
            it is important to provide material bread for all people and ensure
            that they are able to live in a dignified way, it is equally urgent
            to distribute the bread of the Gospel so as to respond to each
            person's hunger for the Truth and for God. Fr. Alberione invited the
            Daughters of St. Paul to center their mission on the Word of God,
            but he also said: "Don't speak only about religion. Speak about
            everything in a Christian way." And he told them to do this by
            taking advantage of all the technologies of communication, by
            blazing new trails for the Gospel, by striving to be present at the
            'crossroads' and 'meeting places' of humanity so that always more
            people can get to know and welcome Jesus. The Daughters of St. Paul
            live for this mission, which they carry out through numerous
            activities.
          </Card.Text>
        </Card.Body>
      </Card>
      <Button className="mb-3 px-5 bg-main">Read More</Button>
      <FoundersAvatar />
    </div>
  );
}

export default Mission;
