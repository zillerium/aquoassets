import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllContractsList from "../components/ShowAllContractsList";
import ShowAllContractsLinkList from "../components/ShowAllContractsLinkList";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listContractABI from "../lib/listContractABI.json";
import listContractAddress from "../lib/listContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function ListAssetPage() {
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
                <ShowAllContractsLinkList
                    listContractAddress={listContractAddress.address}
                    listContractABI={listContractABI}
                    onSelectContract={setSelectedContract} // pass down the setter as a callback
                />
                <hr />
            </Card.Body>
        </Card>
    </Container>
  );
}

export default ListAssetPage;

