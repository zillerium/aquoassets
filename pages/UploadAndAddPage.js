import React, { useState, useContext } from "react";
import LoadIpfs from "../components/LoadIpfs";
import LoadImageIpfsCid from "../components/LoadImageIpfsCid";
import LoadPdfIpfsCid from "../components/LoadPdfIpfsCid";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import addProspectusesABI from "../lib/prospectusesContractABI.json";
import addProspectusesAddressData from "../lib/prospectusesContractAddress.json";
import AddProspectus from "../components/AddProspectus";

import DeployListContract from "../components/DeployListContract";
import deployContractAddress from "../lib/deployContractAddress.json";
import listContractAddress from "../lib/listContractAddress.json";
import deployContractABI from "../lib/deployContractABI.json";


const addProspectusesAddress = addProspectusesAddressData.address;


function UploadAndAddPage() {
const [initialSupply, setInitialSupply] = useState("");


const {userAddress, ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid, ipfsPdfCid, setIpfsPdfCid } =	useContext(WalletContext);
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }
 const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
  }
  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Load Prospectus and Image</h2>
	  <WalletControls />
	  <WalletDetails />
	  <LoadImageIpfsCid />
	  {ipfsImageCid && (
        <div>
          IPFS Image hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsImageCid}` } target="_blank" rel="noopener noreferrer" >
            {ipfsImageCid}
          </a>
        </div>
      )}
	  <LoadPdfIpfsCid />
	  {ipfsPdfCid && (
        <div>
          IPFS Pdf hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsPdfCid}` } target="_blank" rel="noopener noreferrer" >
            {ipfsPdfCid}
          </a>
        </div>
      )}
	  <h2 className="font-mono mb-4">Add Prospectus</h2>
            <div>
                <strong>User Address: </strong>
                <span>{userAddress}</span>
            </div>

            <AddProspectus
                addProspectusesAddress={addProspectusesAddress}
                addProspectusesABI={addProspectusesABI}
                userAddress={userAddress}
                prospectusCid={ipfsPdfCid}
                ipfsImageHash={ipfsImageCid}
            />
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
              deployContractAddress={deployContractAddress.address}
              deployContractABI={deployContractABI}
              listContractAddress={listContractAddress.address}
              initialSupply={initialSupply}
              ipfsProspectusCid={ipfsPdfCid}
              ipfsImageCid={ipfsImageCid}
          />

    </div>
  );
}

export default UploadAndAddPage;

