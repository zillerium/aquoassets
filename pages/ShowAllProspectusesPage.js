import React, { useState, useContext } from "react";
import ShowAllProspectuses from "../components/ShowAllProspectuses";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import prospectusesContractABI from "../lib/prospectusesContractABI.json";
import prospectusesContractData from "../lib/prospectusesContractAddress.json";

const prospectusesContractAddress = prospectusesContractData.address;

function ShowAllProspectusesPage() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  
  return (
    <div className="container mt-4">
      <ShowAllProspectuses
        prospectusesContractAddress={prospectusesContractAddress}
        prospectusesContractABI={prospectusesContractABI}
      />
    </div>
  );
}

export default ShowAllProspectusesPage;

