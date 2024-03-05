import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import daoContractABI from "../lib/daoContractABI.json";
import VoteOnDAO from "./VoteOnDAO";
import ExecuteDAOProposal from "./ExecuteDAOProposal";
import WalletControls from "./WalletControls";
import WalletDetails from "./WalletDetails";

function GetDaoDetails({ daoAddress }) {
  const [daoDetails, setDaoDetails] = useState(null);
  const [error, setError] = useState('');

  // Use useContractRead to read the entire proposal struct at once
  const { data, isLoading, isError } = useContractRead({
    address: daoAddress,
    abi: daoContractABI,
    functionName: 'proposal', // This calls the automatically generated getter for the public 'proposal' struct
  });

  useEffect(() => {
	   console.log('isLoading:', isLoading); // Debugging statement
    console.log('isError:', isError); // Debugging statement
    console.log('data:', data); // Debugging statement

    if (data) {
      // Map the returned data to your daoDetails state
	    setDaoDetails({
        proposer: data[0],
        poolAddress: data[1],
        rwaContract: data[2],
        dilution: data[3].toString(), // Convert BigInt to string for rendering
        yesVotes: data[4].toString(), // Convert BigInt to string for rendering
        noVotes: data[5].toString(), // Convert BigInt to string for rendering
        executed: data[6],
        outcome: data[7],
      });
    } else if (isError) {
      setError('Failed to load DAO details.');
    }
  }, [data, isError]);

  if (isLoading) return <p>Loading DAO details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div>
	  <WalletControls />
	  <WalletDetails />
	   <VoteOnDAO daoAddress={daoAddress} />
	   <ExecuteDAOProposal daoAddress={daoAddress} />
    {daoDetails ? (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Proposer</th>
            <td>{daoDetails.proposer}</td>
          </tr>
          <tr>
            <th scope="row">Pool Address</th>
            <td>
              <a href={`/PoolPage?q=${daoDetails.poolAddress}`} target="_blank" rel="noopener noreferrer">
                {daoDetails.poolAddress}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">RWA Contract</th>
            <td>
              <a href={`/ContractPage?q=${daoDetails.rwaContract}`} target="_blank" rel="noopener noreferrer">
                {daoDetails.rwaContract}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Dilution</th>
            <td>{daoDetails.dilution}</td>
          </tr>
          <tr>
            <th scope="row">Yes Votes</th>
            <td>{daoDetails.yesVotes}</td>
          </tr>
          <tr>
            <th scope="row">No Votes</th>
            <td>{daoDetails.noVotes}</td>
          </tr>
          <tr>
            <th scope="row">Executed</th>
            <td>{daoDetails.executed ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <th scope="row">Outcome</th>
            <td>{daoDetails.outcome ? 'Passed' : 'Not Passed'}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <p>No DAO details to display. Make sure the contract address is correct.</p>
    )}
  </div>
);
 
}

export default GetDaoDetails;

