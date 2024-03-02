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
import Header from "../components/Header";

function ListPoolPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedPool, setSelectedPool] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
	        <Header
           imageAddress="https://ipfs.io/ipfs/QmSaCRpy4wF9JhsHeoMi4bN2uwy83BCoBAgkofgkz6946E"
        imageLabel="List Pools"
          pageHeader="List Pools"
        pageText= "List all the Pools"
          />
        <Card bg="light" text="dark">
            <Card.Body>
                <h3>Available Pools:</h3>
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

