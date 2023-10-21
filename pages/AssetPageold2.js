import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;

function AssetPage() {
	const queryAddress='0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5';
  const { userAddress, setUserAddress } = useContext(WalletContext);  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Show Assets for Wallet Addresses</h2>
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

