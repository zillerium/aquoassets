import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AssetDerivatives = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <img
              src="https://i.ibb.co/9wmhYKM/derivatives-aquo.png"
              alt="Derivatives"
              className="img-fluid rounded-image" // Bootstrap class to make the image responsive
            />
          </Col>
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">Customizable Financial Instruments</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssetDerivatives;

