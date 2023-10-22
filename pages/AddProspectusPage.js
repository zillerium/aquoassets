import React, { useState, useContext } from "react";
import AddProspectus from "../components/AddProspectus";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import addProspectusesABI from "../lib/prospectusesContractABI.json";
import addProspectusesAddressData from "../lib/prospectusesContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

const addProspectusesAddress = addProspectusesAddressData.address;

// function TransferAsset({ addContractAddress, addContractABI, userAddress,ipfsImageHash, assetDesc, assetContractAddress  }) {

function AddProspectusPage() {

        const { userAddress,ipfsImageHash, setIpfsImageHash } = useContext(WalletContext);

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }


	  const handleImageHashChange = (e) => {
        setIpfsImageHash(e.target.value);  // update assetDesc in context when input value changes
    }
    return (
        <div className="container mt-4">
            <h2 className="font-mono mb-4">Add Contract</h2>
                <WalletControls />
	        <WalletDetails />
            <div>
                <strong>User Address: </strong>
                <span>{userAddress}</span>
            </div>
            <div>
                <strong>IPFS Address: </strong>
                <span>{ipfsImageHash}</span>
            </div>
	          <div>
                <Form.Label><strong>Ipfs Address:</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={ipfsImageHash}
                    onChange={handleImageHashChange}  // set up an onChange handler to update assetDesc
                    placeholder="Enter ipfs address"
                />
            </div>

            <AddProspectus
                addProspectusesAddress={addProspectusesAddress}
                addProspectusesABI={addProspectusesABI}
                userAddress={userAddress}
                ipfsImageHash={ipfsImageHash}
            />
        </div>
    );
}


export default AddProspectusPage;

