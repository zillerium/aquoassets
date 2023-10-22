import React, { useState, useContext } from "react";
import TransferAsset from "../components/TransferAsset";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

const contractAddress = contractData.address;

function TransferAssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);  
  const [walletAddress, setWalletAddress] = useState("");  // Create state for wallet address
  const [numShares, setNumShares] = useState(0);  // Create state for number of shares
  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);

  const handleTransfer = () => {
    // Optional: Implement validation or any other logic before transferring assets
  };

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Transfer Assets</h2>
	       <WalletControls />
              <WalletDetails />
      <Form>
        <Form.Group controlId="walletAddress">
          <Form.Label>Wallet Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="numShares">
          <Form.Label>Number of Shares</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of shares"
            value={numShares}
            onChange={(e) => setNumShares(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      <TransferAsset
        contractAddress={contractAddress}
        contractABI={contractABI}
        userAddress={userAddress}
        walletAddress={walletAddress}
        numShares={numShares}
      />
    </div>
  );
}

export default TransferAssetPage;

