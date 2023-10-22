import React, { useState, useContext } from "react";
import LoadIpfs from "../components/LoadIpfs";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

function LoadIpfsPage() {


const {ipfsImageHash, setIpfsImageHash } =	useContext(WalletContext);
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Load Prospectus</h2>
	  <WalletControls />
	  <WalletDetails />
	  <LoadIpfs />
    </div>
  );
}

export default LoadIpfsPage;

