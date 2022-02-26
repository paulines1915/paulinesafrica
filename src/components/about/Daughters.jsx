import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

import spirit1 from '../../assets/spirit1.jpg';
import spirit2 from '../../assets/spirit2.png';
import spirit3 from '../../assets/spirit3.png';

function Daughters() {
  return (
    <div>
      <Card className="text-center p-md-3 border-0">
        <Card.Body style={{ maxWidth: 731 + `px`, margin: 0 + ` auto` }}>
          <Card.Title className="text-maroon my-4 text-uppercase font-header">
            Ever Onward Daughters of St Paul
          </Card.Title>

          <Row className="mb-4" xs={1} md={2}>
            <Col>
              <Card.Text className="text-start">
                Moved by the Spirit and responding to the invitation of Jesus,
                “Come to me all of you”, the Daughters of St Paul feel deeply
                compelled to do something for the Lord and for the people of all
                times, just like their founding icons; Blessed James Alberione
                and Venerable Tecla Merlo.
              </Card.Text>
              <Card.Text className="text-start">
                Called and consecrated to Christ the Divine Master, every
                Daughter of St Paul is sent to proclaim the unfathomable riches
                of the mystery of Christ. In response to the love of God, each
                Daughter of St Paul offers herself daily to Christ in love: i.e.
                intelligence, will, heart, physical strength-everything,
                convinced of God's grace and her vocation for the apostolate.e
                like Aldus PageMaker including versions of Lorem Ipsum.
              </Card.Text>
            </Col>
            <Col>
              {' '}
              <Card.Img
                src={spirit1}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
          </Row>
          <Row className="mb-4" xs={1} md={2}>
            <Col>
              {' '}
              <Card.Img
                src={spirit2}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
            <Col>
              <Card.Text className="text-start">
                Through the Church and its teachings, every Daughter of St Paul
                embraces all people of all times, and the world becomes their
                parish. She participates at Mass with a social conscience that
                transforms the Eucharistic celebration into a living apostolate.
              </Card.Text>
              <Card.Text className="text-start">
                The Pauline apostolate is universal in time and place, it
                promotes the distribution of the truth, through books, DVDs,
                CDs, posters, cards,... all these are pulpits of evangelisation.
                The printing plant, the production, projection and broadcasting
                are like their church.
              </Card.Text>
            </Col>
          </Row>
          <Row className="mb-1" xs={1} md={1}>
            <Col>
              {' '}
              <Card.Img
                src={spirit3}
                className="d-block w-100"
                style={{ maxHeight: 65 + `vh` }}
              />
            </Col>
          </Row>
          <Col>
            <Card.Text className="text-center">
              The Daughters of St Paul are also committed to study. Their
              studies are not just limited to intellectual work, but they learn
              from everything so as to be more available in the mission
              entrusted to them.
            </Card.Text>{' '}
            <Card.Text className="text-center">
              Convinced that the most evident sign of God's presence is in
              sharing of joy among themselves, the Daughters of St Paul seek to
              make their communities places of communion, mutual respect,
              sharing of joys and sorrows, enrichment of cultural values and
              above all a nest of for nurturing their vocation. As an
              international congregation, the Daughters of St Paul present the
              face of Christ from every culture and nation.
            </Card.Text>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Daughters;
