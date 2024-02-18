import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TradeDerivatives = () => {
  return (
    <div className="tradederivatives-container">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">Build complex tradeable financial products
          </h1>
	  </Col>
          <Col lg={6} xs={12}>
            <img
              src="https://i.ibb.co/1K2kB5G/aquo-trade-1.png"
              alt="Derivatives"
              className="img-fluid" // Bootstrap class to make the image responsive
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TradeDerivatives;

