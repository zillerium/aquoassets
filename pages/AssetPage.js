import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

const contractAddress = contractData.address;

function AssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const [queryAddress, setQueryAddress] = useState('0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5');
  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Show Assets for Wallet Addresses</h2>
	    <WalletControls />
              <WalletDetails />
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
      <AssetManager
        contractAddress={contractAddress}
        contractABI={contractABI}
        userAddress={userAddress}
        queryAddress={queryAddress}
      />
    </div>
  );
}

export default AssetPage;

