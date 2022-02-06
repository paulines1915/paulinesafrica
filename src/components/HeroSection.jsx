import React from 'react';

import { Carousel } from 'react-bootstrap';
import item1 from '../assets/item-1.png';

function HeroSection() {
  return (
    <div className="bg-light text-dark">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={item1} alt="First slide" />
          <Carousel.Caption className="text-dark">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100  " src={item1} alt="Second slide" />

          <Carousel.Caption className="text-dark">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={item1} alt="Third slide" />

          <Carousel.Caption className="text-dark">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
