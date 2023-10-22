import React, { useState, useContext } from "react";
import ListAllProspectuses from "../components/ListAllProspectuses";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import prospectusesContractABI from "../lib/prospectusesContractABI.json";
import prospectusesContractData from "../lib/prospectusesContractAddress.json";

const prospectusesContractAddress = prospectusesContractData.address;

function ListAllProspectusesPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  
  return (
    <div className="container mt-4">
      <ListAllProspectuses
        prospectusesContractAddress={prospectusesContractAddress}
        prospectusesContractABI={prospectusesContractABI}
      />
    </div>
  );
}

export default ListAllProspectusesPage;

