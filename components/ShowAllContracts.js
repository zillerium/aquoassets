import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
function ShowAllContracts({listContractAddress, listContractABI }) {

  const [assetsData, setAssetsData] = useState([]);

  const config = {
    address: listContractAddress,
    abi: listContractABI,
    functionName: "getAllContracts",
    args: [],
  };

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
    if (data) {
      // Assuming data is an array of Asset structs
      setAssetsData(data);
	    console.log(data);
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
            <th>Contract Address</th>
          </tr>
        </thead>
	  <tbody>
  {assetsData.map((asset, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{asset.contractId.toString()}</td> {/* Convert BigInt to string */}
      <td>{asset.contractAddress}</td>
    </tr>
  ))}
</tbody>


      </Table>
    </div>
  );
}

export default ShowAllContracts;

