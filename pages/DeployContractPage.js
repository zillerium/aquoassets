import React, { useState, useContext } from "react";
import DeployContract from "../components/DeployContract";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function DeployContractPage() {


const {ipfsImageHash, setIpfsImageHash } =	useContext(WalletContext);
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Deploy Contract</h2>
	  <DeployContract />
    </div>
  );
}

export default DeployContractPage;

