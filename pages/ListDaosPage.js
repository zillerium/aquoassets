import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllDaosLinkList from "../components/ShowAllDaosLinkList";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listDaoABI from "../lib/listDaoABI.json";
import listDaoAddress from "../lib/listDaoAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function ListDaosPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedDao, setSelectedDao] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
        <Card bg="light" text="dark">
            <Card.Header>
                <Row>
                    <Col sm={8}>
                        <h1>List Daos</h1>
                    </Col>
                    <Col sm={4} className="text-right">
                        <WalletControls />
                    </Col>
                </Row>
                <WalletDetails />
            </Card.Header>
            <Card.Body>
                <h3>Available Daos</h3>
                <ShowAllDaosLinkList
                    listDaoAddress={listDaoAddress.address}
                    listDaoABI={listDaoABI}
                    onSelectDao={setSelectedDao} // pass down the setter as a callback
                />
                <hr />
            </Card.Body>
        </Card>
    </Container>
  );
}

export default ListDaosPage;

