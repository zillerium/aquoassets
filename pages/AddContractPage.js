import React, { useState, useContext } from "react";
import AddContract from "../components/AddContract";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import addContractABI from "../lib/addContractABI.json";
import addContractAddress from "../lib/addContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;

// function TransferAsset({ addContractAddress, addContractABI, userAddress,ipfsImageHash, assetDesc, assetContractAddress  }) {

function AddContractPage() {

        const { userAddress,ipfsImageHash, setIpfsImageHash, assetDesc, setAssetDesc } = useContext(WalletContext);

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }

	  const handleAssetDescChange = (e) => {
        setAssetDesc(e.target.value);  // update assetDesc in context when input value changes
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
                <strong>Managing Contract Address: </strong>
                <span>{addContractAddress.address}</span>
            </div>
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
	    <div>
                <Form.Label><strong>Asset Description:</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={assetDesc}
                    onChange={handleAssetDescChange}  // set up an onChange handler to update assetDesc
                    placeholder="Enter asset description"
                />
            </div>
            <div>
                <strong>Asset Contract Address: </strong>
                <span>{contractAddress}</span>
            </div>

            <AddContract
                addContractAddress={addContractAddress}
                addContractABI={addContractABI}
                userAddress={userAddress}
                ipfsImageHash={ipfsImageHash}
                assetDesc={assetDesc}
                assetContractAddress={contractAddress}
            />
        </div>
    );
}


export default AddContractPage;

