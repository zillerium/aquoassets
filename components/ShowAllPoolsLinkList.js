// ...other imports
import Link from 'next/link';
import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
import { ListGroup } from "react-bootstrap";

function ShowAllPoolsLinkList({ listPoolAddress, listPoolABI, onSelectPool }) {
  const [assetsData, setAssetsData] = useState([]);

  const config = {
    address: listPoolAddress,
    abi: listPoolABI,
    functionName: "getAllPools",
    args: [],
  };

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
	  console.log("data === ", data);
    if (data) {
      setAssetsData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

// Inside your .jsx file where you map over your assetsData
return (
  <div className="container mt-4">
    <ListGroup>
      {assetsData.map((asset, index) => (
        <ListGroup.Item key={index}>
            <a href={`/PoolPage?q=${asset.poolAddress}`} target="_blank" rel="noopener noreferrer">
  {asset.poolAddress}
	      </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);


}

export default ShowAllPoolsLinkList;

