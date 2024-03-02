import React, { useState } from "react";
import { Image, Container, Row, Col, Form, Button } from "react-bootstrap";
import WalletSign from "../components/WalletSign";
import WalletDetails from "../components/WalletDetails";
import DeployDAO from "../components/DeployDAO";
import deployDaoAddress from "../lib/deployDaoAddress.json";
import deployDaoABI from "../lib/deployDaoABI.json";
import Header from "../components/Header";

function DaoAdd() {
  const [rwaContract, setRwaContract] = useState("");
  const [poolAddress, setPoolAddress] = useState("");
  const [dilutionFactor, setDilutionFactor] = useState("");
  const [deployData, setDeployData] = useState(null);

  const handleRwaContractChange = (e) => {
    setRwaContract(e.target.value);
  };

  const handlePoolAddressChange = (e) => {
    setPoolAddress(e.target.value);
  };

  const handleDilutionFactorChange = (e) => {
    setDilutionFactor(e.target.value);
  };

  // Check if all fields have values
  const allFieldsEntered = rwaContract && poolAddress && dilutionFactor;

https://ipfs.io/ipfs/QmZ63eyxAJ3oAf5ioVEgAJ3Lc1d8qwLjfLrZS5VRd4fb8T

  return (
    <div>
      <Container>
	                  <Header
           imageAddress="https://ipfs.io/ipfs/QmZ63eyxAJ3oAf5ioVEgAJ3Lc1d8qwLjfLrZS5VRd4fb8T"
        imageLabel="DAO Deployment"
          pageHeader="DAO Deployment"
        pageText= "This is a proposal to join the Liquidity Pool entered and subject the proposal to a DAO vote."
          />
          {/* Column for Wallet Connect and Title */}

        {/* Row for Wallet Details */}

        <hr />
        <Row className="my-3">
          <Col>
            <Form.Control
              type="text"
              value={rwaContract}
              onChange={handleRwaContractChange}
              placeholder="RWA Contract Address"
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Form.Control
              type="text"
              value={poolAddress}
              onChange={handlePoolAddressChange}
              placeholder="Pool Address"
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Form.Control
              type="number"
              value={dilutionFactor}
              onChange={handleDilutionFactorChange}
              placeholder="Dilution Factor"
            />
          </Col>
        </Row>

          <DeployDAO
            deployDAOAddress={deployDaoAddress.address}
            deployDAOABI={deployDaoABI}
            rwaContract={rwaContract}
            poolAddress={poolAddress}
            dilutionFactor={dilutionFactor}
	          enabledButton={allFieldsEntered} // Pass the conditionally set enabledButton prop

          />
 
        {/* Optionally, if DeployDAO is a component that needs to be rendered,
            it can be placed here without conditional rendering based on button click.
            Ensure it's designed to act immediately upon receiving the necessary props. */}
        <hr />
      </Container>
    </div>
  );
}

export default DaoAdd;

