import React, { useState, useContext } from "react";
import DeployListContract from "../components/DeployListContract";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import deployContractAddress from "../lib/deployContractAddress.json";
import listContractAddress from "../lib/listContractAddress.json";
import deployContractABI from "../lib/deployContractABI.json";

function AddIntAssetPage() {

const [initialSupply, setInitialSupply] = useState("");
const {ipfsProspectusCid, setIpfsProspectusCid } =	useContext(WalletContext);

  const handleIpfsProspectusCidChange = (e) => {
    setIpfsProspectusCid(e.target.value);
  }

  const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
  }
  return (
<div className="container mt-4">
      <h2 className="font-mono mb-4">Add Asset</h2>
   <WalletControls />
                <WalletDetails />
          <div>
                <Form.Label><strong>Initial Supply</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={initialSupply}
                    onChange={handleInitialSupplyChange}
                    placeholder="Initial Supply"
                />
            </div>
          <div>
                <Form.Label><strong>Ipfs Prospectus Address</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={ipfsProspectusCid}
                    onChange={handleIpfsProspectusCidChange}
                    placeholder="Ipfs Prospectus Address"
                />
            </div>
          <DeployListContract
              deployContractAddress={deployContractAddress.address}
              deployContractABI={deployContractABI}
              listContractAddress={listContractAddress.address}
              initialSupply={initialSupply}  
              ipfsProspectusCid={ipfsProspectusCid}  

          />
    </div>

  );
}

export default AddIntAssetPage;
DeployListContract
