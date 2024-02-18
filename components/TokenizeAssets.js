// TokenizeAssets.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TokenizeAssets = () => {
  return (
    <div className="tokenize-assets-container" >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <Image
              src="https://i.ibb.co/6szxtVZ/liquidity.png"
              alt="House fractionally owned"
              fluid
	      className="rounded-image"
            />
          </Col>
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">Liquid RWA Investments 24/7 Globally</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TokenizeAssets;

