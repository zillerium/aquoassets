import { ethers } from 'ethers';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import contractABI from "../lib/contractABI.json";
import bytecode1 from "../lib/contractByteCode.js";

const DeployContract = () => {

  const [initialSupply, setInitialSupply] = useState(0);
console.log("ethers == ", ethers);
  const handleDeploy = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log("ethers new == ", ethers);
      console.log("ethers new providers  == ", ethers.providers);
//      const provider = new ethers.BrowserProvider(window.ethereum);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const factory = new ethers.ContractFactory(contractABI, bytecode1, signer);
      const contract = await factory.deploy(initialSupply);
      await contract.deployed();
      console.log('Contract deployed to:', contract.address);
    } else {
      console.error('Ethereum provider is not available');
    }
  }

  return (
    <>
      <h1>Deploy New Contract</h1>
      <div>
        <Button onClick={handleDeploy}>Deploy</Button>
      </div>
      <div>
        <input 
          placeholder="share allocation" 
          type="text" 
          onChange={(e) => setInitialSupply(parseInt(e.target.value))}
        />
      </div>
      <p>Initial Supply: {initialSupply}</p>
    </>
  );
}

export default DeployContract;

