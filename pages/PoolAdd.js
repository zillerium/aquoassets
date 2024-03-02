import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import ShowAllContractsList from "../components/ShowAllContractsList";
import { Image, Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listContractABI from "../lib/listContractABI.json";
import listContractAddress from "../lib/listContractAddress.json";
import deployPoolABI from "../lib/deployPoolABI.json";
import deployPoolAddress from "../lib/deployPoolAddress.json";
import WalletControls from "../components/WalletControls";
import ShareholdersList from "../components/ShareholdersList";
import WalletDetails from "../components/WalletDetails";
import DeployPool from "../components/DeployPool";
import Header from "../components/Header";

function PoolAdd() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('');
  const [selectedContract, setSelectedContract] = useState(null); // to store the selected contract

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }
  return (
    <Container className="bg-white text-dark mt-4">
	  <Header 
	   imageAddress="https://ipfs.io/ipfs/QmdzYdTQuSxRuP9RtV1zGTczdHqgjf45Qhesr9wbqQii9y"
        imageLabel="Liquidity"
	  pageHeader="Pool Deployment"
        pageText= "Start a new pool so that RWAs can be aggregrated"
	  />
        <Card bg="light" text="dark">
            <Card.Body>
	       <DeployPool
        deployPoolAddress={deployPoolAddress.address}
        deployPoolABI={deployPoolABI}
        enabledButton={true}
      />
            </Card.Body>
        </Card>
    </Container>
  );
}

export default PoolAdd;

