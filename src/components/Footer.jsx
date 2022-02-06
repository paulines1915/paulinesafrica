import React from 'react';

import { Image, Row, Col, Card, CardImg } from 'react-bootstrap';

import book1 from '../assets/book1.png';

function Footer() {
  return (
    <div>
      <footer className="w-100">
        <Row xs={3} md={3} className="g-4  ">
          <Card>
            <Card.Img src={book1} style={{ height: 10 + 'rem' }} alt="" />
            <Card.Body className="bg-main">
              <Col className=" book">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  doloremque cupiditate natus soluta eos ducimus, fuga quae
                  magnam a quaerat expedita consectetur, distinctio incidunt
                  itaque hic accusamus. Quibusdam, error. Vitae.
                </p>
              </Col>
              <Col className=" book">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  doloremque cupiditate natus soluta eos ducimus, fuga quae
                  magnam a quaerat expedita consectetur, distinctio incidunt
                  itaque hic accusamus. Quibusdam, error. Vitae.
                </p>{' '}
              </Col>
              <Col className=" book">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  doloremque cupiditate natus soluta eos ducimus, fuga quae
                  magnam a quaerat expedita consectetur, distinctio incidunt
                  itaque hic accusamus. Quibusdam, error. Vitae.
                </p>{' '}
              </Col>
            </Card.Body>
          </Card>
        </Row>
      </footer>
    </div>
  );
}

export default Footer;
