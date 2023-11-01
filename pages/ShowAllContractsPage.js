import React, { useState, useContext } from "react";
import ShowAllContracts from "../components/ShowAllContracts";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import listContractABI from "../lib/listContractABI.json";
import listContractAddress from "../lib/listContractAddress.json";

function ShowAllContractsPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

  return (
    <div className="container mt-4">
      <ShowAllContracts
	  listContractAddress={listContractAddress.address}
	  listContractABI={listContractABI}
      />
    </div>
  );
}

export default ShowAllContractsPage;

