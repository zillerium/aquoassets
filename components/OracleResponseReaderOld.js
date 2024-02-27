import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';

function OracleResponseReader({ oracleAddress, oracleABI }) {
  const [responseValue, setResponseValue] = useState('');

  // Configuration for the contract read operation
  const responseReadConfig = {
    address: oracleAddress,
    abi: oracleABI,
    functionName: 'response', // Assuming 'response' is the function name in the contract
    args: [], // Add any required arguments for the function here
  };

  // Using wagmi's useContractRead hook to read data from the contract
  const { data, isError, error } = useContractRead(responseReadConfig);

  // Use useEffect to update the component state when new data is read from the contract
  useEffect(() => {
    if (data) {
      setResponseValue(data.toString()); // Assuming the response is a number and converting it to a string for display
    }
  }, [data]);

  // Handling error state
  if (isError) {
    return <div>Error fetching response from the contract: {error?.message}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Contract Response</h2>
      <p>Response value: {responseValue || 'Reading...'}</p>
    </div>
  );
}

export default OracleResponseReader;

