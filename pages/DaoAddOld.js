import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import WalletSign from "../components/WalletSign";
import WalletDetails from "../components/WalletDetails";
import DeployDAO from "../components/DeployDAO";
import deployDaoAddress from "../lib/deployDaoAddress.json";
import deployDaoABI from "../lib/deployDaoABI.json";

function DaoAdd() {
  const [rwaContract, setRwaContract] = useState("");
  const [poolAddress, setPoolAddress] = useState("");
  const [dilutionFactor, setDilutionFactor] = useState("");
  const [deployClicked, setDeployClicked] = useState(false);

  const handleRwaContractChange = (e) => {
    setRwaContract(e.target.value);
  };

  const handlePoolAddressChange = (e) => {
    setPoolAddress(e.target.value);
  };

  const handleDilutionFactorChange = (e) => {
    setDilutionFactor(e.target.value);
  };

  const handleDeployClick = () => {
    setDeployClicked(true);
  };

  // Check if all fields have values
  const allFieldsEntered = rwaContract && poolAddress && dilutionFactor;

  return (
    <div>
      <Container>
        <Row>
          <WalletSign />
        </Row>
        <Row>
          <WalletDetails />
        </Row>
        <hr />
        <Row className="justify-content-center my-4">
          <h4>DAO Deployment</h4>
        </Row>
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
        <Row className="my-3">
          <Col>
            <Button
              variant="primary"
              disabled={!allFieldsEntered}
              onClick={handleDeployClick}
            >
              Deploy DAO
            </Button>
          </Col>
        </Row>
        {deployClicked && (
          <Row className="my-3">
            <Col>
              <DeployDAO
                deployDAOAddress={deployDaoAddress.address}
                deployDAOABI={deployDaoABI}
                rwaContract={rwaContract}
                poolAddress={poolAddress}
                dilutionFactor={dilutionFactor}
              />
            </Col>
          </Row>
        )}
        <hr />
      </Container>
    </div>
  );
}

export default DaoAdd;

