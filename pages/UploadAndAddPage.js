import React, { useState, useContext } from "react";
import LoadIpfs from "../components/LoadIpfs";
import LoadImageIpfsCid from "../components/LoadImageIpfsCid";
import LoadPdfIpfsCid from "../components/LoadPdfIpfsCid";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletSign from "../components/WalletSign";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import addProspectusesABI from "../lib/prospectusesContractABI.json";
import addProspectusesAddressData from "../lib/prospectusesContractAddress.json";
import AddProspectus from "../components/AddProspectus";
import ProcessSteps1to3 from "../components/ProcessSteps1to3";
import ProcessSteps4to6 from "../components/ProcessSteps4to6";

import DeployListContract from "../components/DeployListContract";
import deployContractAddress from "../lib/deployContractAddress.json";
import listContractAddress from "../lib/listContractAddress.json";
import deployContractABI from "../lib/deployContractABI.json";

const addProspectusesAddress = addProspectusesAddressData.address;

function UploadAndAddPage() {
  const [initialSupply, setInitialSupply] = useState("");

  const {
    signed,
    setSigned,
    imageClientName,
    setImageClientName,
    pdfClientName,
    setPdfClientName,
    userAddress,
    ipfsImageHash,
    setIpfsImageHash,
    ipfsImageCid,
    setIpfsImageCid,
    ipfsPdfCid,
    setIpfsPdfCid,
  } = useContext(WalletContext);
  const handleAddressChange = (e) => {
    setQueryAddress(e.target.value);
  };
  const handleInitialSupplyChange = (e) => {
    setInitialSupply(e.target.value);
  };
  console.log("pdf == ", ipfsPdfCid);
  return (
    <div>
      <Container>
        <Row>
          <WalletSign />
        </Row>
        <Row>
          <WalletDetails />
        </Row>
 <Row className="justify-content-center my-4">
        <h2>Upload Prospectus Details and Tokenize</h2>
      </Row>
    <Row>
      <Col md={6}>
        <ProcessSteps1to3 />
      </Col>
      <Col md={6}>
        <ProcessSteps4to6 />
      </Col>
    </Row>
<hr />

 <Row className="justify-content-center my-4">
        <h4>Upload Prospectus Image</h4>
      </Row>
        <Row className="my-3">
          <LoadImageIpfsCid enabledButton={signed} />
          <Col>
            <div> Local Filename: {imageClientName}</div>
            <div>
              {ipfsImageCid && (
                <div>
                  IPFS Image hash:{" "}
                  <a
                    href={`https://ipfs.io/ipfs/${ipfsImageCid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ipfsImageCid}
                  </a>
                </div>
              )}
            </div>
          </Col>
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
        </Row>
<hr />

 <Row className="justify-content-center my-4">
        <h4>Upload PDF Details</h4>
      </Row>
        <Row className="my-3">
          <LoadPdfIpfsCid enabledButton={signed} />
          <Col>
            <div>Local Pdf Name: {pdfClientName} </div>
            <div>
              {ipfsPdfCid && (
                <div>
                  IPFS Pdf hash:{" "}
                  <a
                    href={`https://ipfs.io/ipfs/${ipfsPdfCid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ipfsPdfCid}
                  </a>
                </div>
              )}
            </div>
          </Col>
	  <Col></Col>
        </Row>
	  <hr />

 <Row className="justify-content-center my-4">
        <h4>Tokenize Prospectus Offer</h4>
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
              enabledButton={signed}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UploadAndAddPage;

