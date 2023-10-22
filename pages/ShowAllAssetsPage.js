import React, { useState, useContext } from "react";
import ShowAllAssets from "../components/ShowAllAssets";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import contractABI from "../lib/contractABI.json";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;

function ShowAllAssetsPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  
  console.log("Contract Address:", contractAddress);
  console.log("User Address:", userAddress);

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <ShowAllAssets
        contractAddress={contractAddress}
        contractABI={contractABI}
      />
    </div>
  );
}

export default ShowAllAssetsPage;

