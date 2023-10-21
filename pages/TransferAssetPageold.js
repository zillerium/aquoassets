import React, { useState, useContext } from "react";
import TransferAsset from "../components/TransferAsset";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;

function TransferAssetPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);
	const walletAddress="0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";
	const numShares= 100;

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Transfer Assets</h2>
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

