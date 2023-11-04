import React, { useEffect, useState } from "react";
import { Table, Image, Carousel } from "react-bootstrap";
import { useContractRead } from "wagmi";

function ListAllProspectuses({ prospectusesContractAddress, prospectusesContractABI }) {
  const [recordsData, setRecordsData] = useState([]);

  const configForAllRecords = {
    address: prospectusesContractAddress,
    abi: prospectusesContractABI,
    functionName: "getAllRecords",
    args: [],
  };

  const { data: allRecords, error } = useContractRead(configForAllRecords);

  useEffect(() => {
    if (allRecords) {
      setRecordsData(allRecords);
    }
  }, [allRecords, prospectusesContractAddress, prospectusesContractABI]);

  if (error) {
    return <div>Error fetching data from the contract: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">All Prospectuses</h2>
      {/* Carousel display for prospectuses */}
      <Carousel>
        {recordsData.map((record, index) => (
          <Carousel.Item key={index}>
            <Image 
              src={`https://ipfs.io/ipfs/${record.imageCid}`} 
              alt="Prospectus Image" 
              className="d-block h-100"
              fluid 
              rounded 
            />
            <Carousel.Caption>
              <h3>Prospectus {index + 1}</h3>
              <p>Proposer: {record.proposer}</p>
              <a href={`https://ipfs.io/ipfs/${record.prospectusCid}`} target="_blank" rel="noopener noreferrer">
                View Prospectus
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>


      {/* Table display for prospectuses */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Prospectus Link</th>
            <th>Image</th>
            <th>Proposer Address</th>
          </tr>
        </thead>
        <tbody>
          {recordsData.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <a href={`https://ipfs.io/ipfs/${record.prospectusCid}`} target="_blank" rel="noopener noreferrer">
                  View Prospectus
                </a>
              </td>
              <td>
                <Image 
                  src={`https://ipfs.io/ipfs/${record.imageCid}`} 
                  alt="Prospectus Image" 
                  fluid 
                  rounded 
                />
              </td>
              <td>{record.proposer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListAllProspectuses;

