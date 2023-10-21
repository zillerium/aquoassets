import React, { useState, useContext } from "react";
import AddContract from "../components/AddContract";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import addContractABI from "../lib/addContractABI.json";
import addContractAddress from "../lib/addContractAddress.json";

// function TransferAsset({ addContractAddress, addContractABI, userAddress,ipfsAddress, assetDesc, assetContractAddress  }) {

function AddContractPage() {

        const { userAddress,ipfsAddress, assetDesc, assetContractAddress } = useContext(WalletContext);

  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }


    return (
        <div className="container mt-4">
            <h2 className="font-mono mb-4">Add Contract</h2>

            <div>
                <strong>Contract Address: </strong>
                <span>{addContractAddress.address}</span>
            </div>
            <div>
                <strong>User Address: </strong>
                <span>{userAddress}</span>
            </div>
            <div>
                <strong>IPFS Address: </strong>
                <span>{ipfsAddress}</span>
            </div>
            <div>
                <strong>Asset Description: </strong>
                <span>{assetDesc}</span>
            </div>
            <div>
                <strong>Asset Contract Address: </strong>
                <span>{assetContractAddress}</span>
            </div>

            <AddContract
                addContractAddress={addContractAddress}
                addContractABI={addContractABI}
                userAddress={userAddress}
                ipfsAddress={ipfsAddress}
                assetDesc={assetDesc}
                assetContractAddress={assetContractAddress}
            />
        </div>
    );
}


export default AddContractPage;

