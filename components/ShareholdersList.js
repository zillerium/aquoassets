import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";

function ShareholdersList({ contractAddress, contractABI }) {
  const [shareholders, setShareholders] = useState([]);

const config = {
    address: contractAddress,
    abi: contractABI,
    functionName: "getHolders",
    args: [],
  };

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
    if (data) {
      setShareholders(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(" data == ", data);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Address</th>
          <th>Shares</th>
        </tr>
      </thead>
      <tbody>
        {shareholders.map((holder, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{holder.addr}</td>
            <td>{holder.balance.toString()}</td> {/* balance converted to string to prevent errors */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ShareholdersList;

