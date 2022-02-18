import React from 'react';
import { useState } from 'react';
import { Row, Col, Tabs, Tab, Container, Card } from 'react-bootstrap';
import HeroSection from '../utilities/HeroSection';
import FounderBio from './FounderBio';
import FounderPrayer from './FounderPrayer';
import FoundersAvatar from './FoundersAvatar';

import james from '../../assets/james-cover.jpg';
import FounderContact from './FounderContact';

function Founders() {
  const [key, setKey] = useState('name');
  return (
    <>
      <HeroSection />
      <Container>
        <Row xs={1} md={2} className="pt-5 px-4 text-start">
          <Col md={5} className="p-3">
            <h4>Blessed James Alberione Founder of the Pauline Family</h4>
            <img src={james} alt="" style={{ maxWidth: 100 + `%` }} />
          </Col>
          <Col md={7}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="name" title="Blessed James Alberione">
                <FounderBio />
              </Tab>
              <Tab eventKey="prayer" title="Prayer">
                <FounderPrayer />
              </Tab>
              <Tab eventKey="contact" title="Contact Information">
                <FounderContact />
              </Tab>
            </Tabs>
          </Col>

          <Col md={12} className="text-center my-3 ">
            <Card className="py-5 px-3 bg-main text-white rounded-0">
              <Card.Text>
                Blessed James Alberione sa the mission of communication not as a
                “business,” but as preaching, as an exercise of the ministry of
                salvation, in which we offer Jesus as a gift to others.
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <FoundersAvatar />
      </Container>
    </>
  );
}

export default Founders;
