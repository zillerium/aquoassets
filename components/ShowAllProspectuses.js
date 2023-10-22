import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useContractRead } from "wagmi";

function ShowAllProspectuses({ prospectusesContractAddress, prospectusesContractABI }) {
  const [recordsData, setRecordsData] = useState([]);

  const configForAllRecords = {
    address: prospectusesContractAddress,
    abi: prospectusesContractABI,
    functionName: "getAllRecords",
    args: [],
  };

  const { data: allRecords } = useContractRead(configForAllRecords);

  useEffect(() => {
    if (allRecords) {
      setRecordsData(allRecords);
    }
  }, [allRecords, prospectusesContractAddress, prospectusesContractABI]);

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">All Prospectuses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>IPFS Address</th>
            <th>Proposer Address</th>
          </tr>
        </thead>
        <tbody>
          {recordsData.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{record.ipfsAddress}</td>
              <td>{record.proposer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowAllProspectuses;

