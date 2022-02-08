import React from 'react';

import { Carousel } from 'react-bootstrap';
import item1 from '../../assets/item-1.png';

function HeroSection() {
  return (
    <div className="bg-main text-dark">
      <Carousel>
        <Carousel.Item className="hero-height">
          <img
            className="d-block w-100"
            style={{ height: 65 + `vh` }}
            src={item1}
            alt="First slide"
          />
          <Carousel.Caption className="text-dark mb-5 pb-5">
            <h3>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-height">
          <img
            className="d-block w-100"
            style={{ height: 65 + `vh` }}
            src={item1}
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark mb-5 pb-5">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero-height ">
          <img
            className="d-block w-100"
            style={{ height: 65 + `vh` }}
            src={item1}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark mb-5 pb-5">
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
