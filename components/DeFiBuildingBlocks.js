// DeFiBuildingBlocks.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DeFiBuildingBlocks = () => {
  return (
    <div className="defi-assets-container text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2">DeFi Building Blocks</h1>
            <p className="lead mb-3">For Tokenization and Financial Instruments</p>
            <div>
              <a href="./UploadAndAddPage" className="btn btn-light me-2 text-dark">Get Started</a>
              <a href="https://youtube.com/watch?v=sRlT_yY9WHw" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light text-white">Watch Video</a>
            </div>
          </Col>
          <Col lg={6} xs={12} className="mt-4 mt-lg-0">
            <img src="https://i.ibb.co/km2BTxS/rwa.png" alt="Financial Liquidity" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeFiBuildingBlocks;

