import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllContractsList from "../components/ShowAllContractsList";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listContractABI from "../lib/listContractABI.json";
import listContractAddress from "../lib/listContractAddress.json";
import WalletControls from "../components/WalletControls";
import ShareholdersList from "../components/ShareholdersList";
import WalletDetails from "../components/WalletDetails";
import Header from "../components/Header";

function AssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedContract, setSelectedContract] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
	                                               <Header
           imageAddress="https://ipfs.io/ipfs/QmPvnxsinra7f9XphtQK2FfRsAnHsQ7Y158bNQJziBvSip"
        imageLabel="Wallets in RWA Contracts List"
          pageHeader="Wallets in RWA Contracts List"
        pageText= "List of Wallets for RWA Contracts"
          />
        <Card bg="light" text="dark">
            <Card.Body>
                <h3>Available Contracts:</h3>
                <ShowAllContractsList
                    listContractAddress={listContractAddress.address}
                    listContractABI={listContractABI}
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
                            <><AssetManager
                                contractAddress={selectedContract}
                                contractABI={contractABI}
                                userAddress={userAddress}
                                queryAddress={queryAddress}
                            />
				   <ShareholdersList
                                     contractAddress={selectedContract}
                                     contractABI={contractABI}
                                    />
				</>
                        )}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
  );
}

export default AssetPage;

