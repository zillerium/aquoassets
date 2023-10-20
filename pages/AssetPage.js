import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;

function AssetPage({
}) {
        const { userAddress, setUserAddress } = useContext(WalletContext);  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);

  return (
    <div>
      <h2>Show Assets for Wallet Addresses</h2>
      <AssetManager
        contractAddress={contractAddress}
        contractABI={contractABI}
        userAddress={userAddress}
      />
    </div>
  );
}

export default AssetPage;

