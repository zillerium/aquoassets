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
import Header from "../components/Header";

function ListAssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedContract, setSelectedContract] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <Container className="bg-white text-dark mt-4">
	                                         <Header
           imageAddress="https://ipfs.io/ipfs/QmZaHzDyFws8Yk8nx7Man5LFMpnk3kApays8U9MWC6W84L"
        imageLabel="RWA Contracts"
          pageHeader="RWA Contracts"
        pageText= "List of RWA Contracts"
          />
        <Card bg="light" text="dark">
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

