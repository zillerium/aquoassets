import React, { useState, useContext } from "react";
import AddProspectus from "../components/AddProspectus";
import { Button, Form } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import addProspectusesABI from "../lib/prospectusesContractABI.json";
import addProspectusesAddressData from "../lib/prospectusesContractAddress.json";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";

const addProspectusesAddress = addProspectusesAddressData.address;

function AddProspectusPage() {
    const { userAddress, ipfsImageHash, setIpfsImageHash } = useContext(WalletContext);
    const [prospectusCid, setProspectusCid] = useState(''); // State to store the prospectus CID

    const handleImageHashChange = (e) => {
        setIpfsImageHash(e.target.value);
    }

    const handleProspectusCidChange = (e) => {
        setProspectusCid(e.target.value); // Update prospectusCid state when input value changes
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
                <strong>Prospectus CID: </strong>
                <span>{prospectusCid}</span>
            </div>
            <div>
                <strong>IPFS Image Address: </strong>
                <span>{ipfsImageHash}</span>
            </div>

            <div>
                <Form.Label><strong>Prospectus CID:</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={prospectusCid}
                    onChange={handleProspectusCidChange}
                    placeholder="Enter prospectus CID"
                />
            </div>

            <div className="mt-3">
                <Form.Label><strong>IPFS Image Address:</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={ipfsImageHash}
                    onChange={handleImageHashChange}
                    placeholder="Enter IPFS image address"
                />
            </div>

            <AddProspectus
                addProspectusesAddress={addProspectusesAddress}
                addProspectusesABI={addProspectusesABI}
                userAddress={userAddress}
                prospectusCid={prospectusCid}
                ipfsImageHash={ipfsImageHash}
            />
        </div>
    );
}

export default AddProspectusPage;

