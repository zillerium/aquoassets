import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllContractsList from "../components/ShowAllContractsList";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import addContractABI from "../lib/addContractABI.json";
import addContractAddress from "../lib/addContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function AssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedContract, setSelectedContract] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
        <Card bg="light" text="dark">
            <Card.Header>
                <Row>
                    <Col sm={8}>
                        <h1>List Assets for Asset Contracts</h1>
                    </Col>
                    <Col sm={4} className="text-right">
                        <WalletControls />
                    </Col>
                </Row>
                <WalletDetails />
            </Card.Header>
            <Card.Body>
                <h3>Available Contracts:</h3>
                <ShowAllContractsList
                    addContractAddress={addContractAddress.address}
                    addContractABI={addContractABI}
                    onSelectContract={setSelectedContract} // pass down the setter as a callback
                />
                <hr />
                <Row className="mb-3 justify-content-md-center">
                    <Col xs="auto">
                        <h3>Selected Contract: {selectedContract}</h3>
                        <Form>
                            <Form.Group controlId="formWalletAddress">
                                <Form.Label>Wallet Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter wallet address" 
                                    value={queryAddress} 
                                    onChange={handleAddressChange}
                                />
                            </Form.Group>
                        </Form>
                        {selectedContract && (
                            <AssetManager
                                contractAddress={selectedContract}
                                contractABI={contractABI}
                                userAddress={userAddress}
                                queryAddress={queryAddress}
                            />
                        )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default AssetPage;

