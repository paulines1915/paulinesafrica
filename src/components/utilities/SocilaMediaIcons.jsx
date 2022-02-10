import React from 'react';

import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

import { Col } from 'react-bootstrap';

function SocilaMediaIcons() {
  return (
    <Col>
      <ul className="list-unstyled">
        <li>
          <h1>Connect with us</h1>
        </li>
        <li>
          {' '}
          <a
            href="https://www.facebook.com/paulinesbooks.centre/"
            className="m-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
            Facebook
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/daughtersofstpaul_africa/?hl=en"
            className="m-2"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaInstagram />
            Instagram
          </a>
        </li>

        <li>
          <a
            href="https://mobile.twitter.com/africapaulines"
            className="m-2"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCcTSXNL4ixtgjUluuIvxNXA/videos"
            className="m-2"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <FaYoutube />
            Youtube
          </a>
        </li>
      </ul>
    </Col>
  );
}

export default SocilaMediaIcons;
