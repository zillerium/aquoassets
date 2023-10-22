import React, { useState, useContext } from "react";
import ShowAllContracts from "../components/ShowAllContracts";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import addContractABI from "../lib/addContractABI.json";
import addContractAddress from "../lib/addContractAddress.json";

function ShowAllContractsPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <ShowAllContracts
	  addContractAddress={addContractAddress.address}
	  addContractABI={addContractABI}
      />
    </div>
  );
}

export default ShowAllContractsPage;

