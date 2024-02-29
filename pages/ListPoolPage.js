import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllPoolsLinkList from "../components/ShowAllPoolsLinkList";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listContractABI from "../lib/listContractABI.json";
import listContractAddress from "../lib/listContractAddress.json";
import listPoolABI from "../lib/listPoolABI.json";
import listPoolAddress from "../lib/listPoolAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function ListPoolPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedPool, setSelectedPool] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
        <Card bg="light" text="dark">
            <Card.Header>
                <Row>
                    <Col sm={8}>
                        <h1>List Pools</h1>
                    </Col>
                    <Col sm={4} className="text-right">
                        <WalletControls />
                    </Col>
                </Row>
                <WalletDetails />
            </Card.Header>
            <Card.Body>
                <h3>Available Contracts:</h3>
                <ShowAllPoolsLinkList
                    listPoolAddress={listPoolAddress.address}
                    listPoolABI={listPoolABI}
                    onSelectPool={setSelectedPool} // pass down the setter as a callback
                />
                <hr />
            </Card.Body>
        </Card>
    </Container>
  );
}

export default ListPoolPage;

