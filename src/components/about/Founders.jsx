import React from 'react';
import { Card, Button } from 'react-bootstrap';
import HeroSection from '../utilities/HeroSection';

function Founders() {
  return (
    <div>
      <HeroSection />
      <Card className="border-0 p-3">
        <Card.Title className="text-maroon">Blessed James Alberione</Card.Title>
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lobortis nisi est, quis viverra leo placerat a. Donec massa nibh,
            cursus finibus dui eget, accumsan ullamcorper purus. Duis sagittis
            et tellus blandit viverra. Sed libero enim, imperdiet ut condimentum
            in, mattis ac risus. Curabitur non feugiat nunc, bibendum congue
            ipsum. In eros diam, maximus ac
          </Card.Text>
        </Card.Body>
      </Card>
      <Button className="mb-3">Read More</Button>
    </div>
  );
}

export default Founders;
