import React, { useState, useContext } from "react";
import LoadIpfs from "../components/LoadIpfs";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";


function LoadIpfsPage() {

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Load Prospectus</h2>
	  <LoadIpfs />
    </div>
  );
}

export default LoadIpfsPage;

