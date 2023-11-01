import React, { useState, useContext } from "react";
import TransferAsset from "../components/TransferAsset";
import ShowAllContractsList from "../components/ShowAllContractsList";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import listContractAddress from "../lib/listContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import listContractABI from "../lib/listContractABI.json";

function TransferAssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);  
  const [walletAddress, setWalletAddress] = useState("");  
  const [numShares, setNumShares] = useState(0);  
  const [selectedContractAddress, setSelectedContractAddress] = useState("");

  console.log("Selected Contract Address:", selectedContractAddress);
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
        <ShowAllContractsList
            listContractAddress={listContractAddress.address}
            listContractABI={listContractABI}
            onSelectContract={setSelectedContractAddress}
        />
      {selectedContractAddress && (
          <p className="mt-3 mb-1">
            Selected Contract Address: <strong>{selectedContractAddress}</strong>
          </p>
        )}

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
        contractAddress={selectedContractAddress}
        contractABI={contractABI}
        userAddress={userAddress}
        walletAddress={walletAddress}
        numShares={numShares}
      />
    </div>
  );
}

export default TransferAssetPage;

