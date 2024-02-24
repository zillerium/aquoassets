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
              src="https://ipfs.io/ipfs/QmaCqH5xD2ByFU8D5yZd8dAyncp6zVNiBvW3kY9xP9hArg"
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

