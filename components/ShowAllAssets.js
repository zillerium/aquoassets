import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function ShowAllAssets({ contractAddress, contractABI, userAddress }) {
  const [holdersData, setHoldersData] = useState(null);

  const config = {
    address: contractAddress,
    abi: contractABI,
    functionName: "getAllHolders",
    args: [],
  };

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
    if (data) {
      const [addresses, balances] = data;
      const formattedData = addresses.map((address, index) => ({
        address,
        balance: balances[index].toString(),
      }));
      setHoldersData(formattedData);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">All Asset Holders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th>
            <th>Shares</th>
          </tr>
        </thead>
        <tbody>
          {holdersData &&
            holdersData.map((holder, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{holder.address}</td>
                <td>{holder.balance}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowAllAssets;

