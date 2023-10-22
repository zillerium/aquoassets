import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function ShowAllContracts({ addContractAddress, addContractABI }) {

  const [assetsData, setAssetsData] = useState([]);

  const config = {
    address: addContractAddress,
    abi: addContractABI,
    functionName: "getAllAssets",
    args: [],
  };

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
    if (data) {
      // Assuming data is an array of Asset structs
      setAssetsData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">All Contracts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Asset ID</th>
            <th>IPFS Address</th>
            <th>Description</th>
            <th>Contract Address</th>
          </tr>
        </thead>
        <tbody>
          {assetsData.map((asset, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{asset.assetId}</td>
              <td>{asset.ipfsAddress}</td>
              <td>{asset.assetDesc}</td>
              <td>{asset.contractAddress}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowAllContracts;

