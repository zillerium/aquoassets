// LiquidityVoting.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const LiquidityVoting = () => {
  return (
    <div className="liquidity-voting-container"> {/* Class name for potential styling */}
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">Pool Tokenized Assets</h1>
          </Col>
          <Col lg={6} xs={12}>
            <Image
              src="https://i.ibb.co/hWTLTNh/aquoify-1.png"
              alt="Create Liquidity"
	  fluid
              className="rounded-image" // Ensure this class is defined in your CSS
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LiquidityVoting;

