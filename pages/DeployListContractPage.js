import React, { useState, useContext } from "react";
import DeployListContract from "../components/DeployListContract";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import addDeployListAddress from "../lib/deployContractAddress.json";
import addDeployListABI from "../lib/deployContractABI.json";

function DeployListContractPage() {
console.log("address --== ", addDeployListAddress)
const [initialSupply, setInitialSupply] = useState("");

const {ipfsImageHash, setIpfsImageHash } =	useContext(WalletContext);
  const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Deploy and List Contract</h2>
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
	  <DeployListContract
              addDeployListAddress={addDeployListAddress.address}
	      addDeployListABI={addDeployListABI}
	      initialSupply={initialSupply}  

	  />
    </div>
  );
}

export default DeployListContractPage;

