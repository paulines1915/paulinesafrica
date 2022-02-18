import React from 'react';

import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.png';
import banner3 from '../../assets/banner-3.png';
import banner4 from '../../assets/banner-4.png';
import banner5 from '../../assets/banner-5.png';

function HeroSection() {
  return (
    <div
      id="carouselHacked"
      className="text-dark bg-main"
      style={{ maxHeight: 70 + `vh` }}
    >
      <Carousel fade='true'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + 'vh' }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="text-dark">           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banner4}
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ maxHeight: 70 + `vh` }}
            src={banner5}
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
