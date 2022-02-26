import React from 'react';

import { Carousel } from 'react-bootstrap';


function HeroSection({banners={}}) {
  return (
    <div
      id="carouselHacked"
      className="text-dark bg-main"
      style={{ maxHeight: 70 + `vh` }}
    >
{console.log(banners)}
      <Carousel fade='true'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + 'vh' }}
            src={banners[0]}
            alt="First slide"
          />
          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banners[1]}
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark">           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banners[2]}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banners[3]}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banners[4]}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
