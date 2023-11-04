import React, { useState, useContext } from "react";
import LoadIpfs from "../components/LoadIpfs";
import LoadImageIpfsCid from "../components/LoadImageIpfsCid";
import LoadPdfIpfsCid from "../components/LoadPdfIpfsCid";
import {Container, Row, Col, Button, Form } from "react-bootstrap";
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


const {imageClientName, setImageClientName, pdfClientName, setPdfClientName, userAddress, ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid, ipfsPdfCid, setIpfsPdfCid } =	useContext(WalletContext);
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  }
 const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
  }
  return (
	  <div>
<Container>
	  <Row>
	  <WalletControls />
	  </Row>
	  <Row>
<WalletDetails />
	  </Row>
	   <Row className="my-3">
	   <Col>
      {ipfsImageCid ? (
        <div className="border rounded p-3">
          <img
            src={`https://ipfs.io/ipfs/${ipfsImageCid}`}
            alt="IPFS Image"
            className="img-fluid custom-thumbnail"
          />
        </div>
      ) : (
        <div className="border rounded p-3 text-center">
          <p>Image Placeholder</p>
        </div>
      )}
    </Col>
	 <Col > 
	 <div> Client Filename: {imageClientName}</div>
	  <div>
{ipfsImageCid && (
        <div>
          IPFS Image hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsImageCid}` } target="_blank" rel="noopener noreferrer" >
            {ipfsImageCid}
          </a>
        </div>
      )}

	  </div>

	  </Col>
      <LoadImageIpfsCid />

	  </Row>
	 <Row className="my-3">
<Col>
	</Col>
	<Col>
	<div>Pdf Name: </div>
	<div>
	  {ipfsPdfCid && (
        <div>
          IPFS Pdf hash:{' '}
          <a href={`https://ipfs.io/ipfs/${ipfsPdfCid}` } target="_blank" rel="noopener noreferrer" >
            {ipfsPdfCid}
          </a>
        </div>
      )}
</div>
         </Col>
	  <LoadPdfIpfsCid />

	  </Row>
 <Row className="my-3">
            <Col>
                <strong>User Address: </strong>
                <span>{userAddress}</span>
            </Col>

<Col>
                <Form.Control
                    type="text"
                    value={initialSupply}
                    onChange={handleInitialSupplyChange}
                    placeholder="Initial Supply"
                />
	</Col>
	<Col>
  <DeployListContract
    deployContractAddress={deployContractAddress.address}
    deployContractABI={deployContractABI}
    listContractAddress={listContractAddress.address}
    initialSupply={initialSupply}
    ipfsProspectusCid={ipfsPdfCid}
    ipfsImageCid={ipfsImageCid}
  />
</Col>
	  </Row>
    </Container>

    </div>
  );
}

export default UploadAndAddPage;

