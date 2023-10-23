// ...other imports
import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
import { ListGroup } from "react-bootstrap";

function ShowAllContractsList({ addContractAddress, addContractABI, onSelectContract }) {
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
      setAssetsData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <ListGroup>
        {assetsData.map((asset, index) => (
          <ListGroup.Item key={index} onClick={() => onSelectContract(asset.contractAddress)}>
            {asset.contractAddress}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ShowAllContractsList;

