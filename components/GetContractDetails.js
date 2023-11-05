// components/GetContractDetails.jsx
import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';

function GetContractDetails({ contractAddress, aggregatorContractAddress, aggregatorContractABI }) {
  const [contractDetails, setProspectusDetails] = useState(null);
  const [error, setError] = useState('');

  const { data, isLoading, isError } = useContractRead({
    address: aggregatorContractAddress,
    abi: aggregatorContractABI,
    functionName: 'getContractAndProspectus',
    args: [contractAddress], // args must be an array, even with a single value
  });

  useEffect(() => {
    if (data) {
      // Assuming the smart contract returns an array of values corresponding to the return parameters
      const details = {
        contractId: data[0],
        prospectusCid: data[1],
        imageCid: data[2],
        proposer: data[3],
      };
      setProspectusDetails(details);
    }
    if (isError) {
      setError('Failed to load prospectus details.');
    }
  }, [data, isError]);

  if (isLoading) return <p>Loading prospectus details...</p>;
  if (error) return <p>Error: {error}</p>;
 console.log("pro ", contractDetails );
  // No need to output contractDetails directly, the detailed fields are displayed below
return (
    <div>
      {contractDetails ? (
        <>
          <div>
            <p>Contract ID: {contractDetails.contractId}</p>
            <p>Prospectus CID: {contractDetails.prospectusCid}</p>

            {contractDetails.imageCid ?(
        <div className="border rounded p-3">
          <img
                src={`https://ipfs.io/ipfs/${contractDetails.imageCid}`} 
            alt="IPFS Image"
		          style={{ maxWidth: '400px' }} // Inline style for max-width

            className="img-fluid "
          />
        </div>
      ) : (
        <div className="border rounded p-3 text-center">
          <p>Image Placeholder</p>
        </div>
      )}

            <p>Image CID: {contractDetails.imageCid}</p>
            <p>Proposer: {contractDetails.proposer}</p>
            <a href={`https://ipfs.io/ipfs/${contractDetails.prospectusCid}`} target="_blank" rel="noopener noreferrer">
              View Prospectus PDF
            </a>
          </div>
        </>
      ) : (
        <p>No prospectus details to display. Make sure the contract address is correct.</p>
      )}
    </div>
  );
}

export default GetContractDetails;

