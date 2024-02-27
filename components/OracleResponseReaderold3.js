import React, { useState } from 'react';
import { useContractRead } from 'wagmi';

function OracleResponseReader({ oracleAddress, oracleABI }) {
  const [responseValue, setResponseValue] = useState('');
  const [error, setError] = useState('');
  const [isReading, setIsReading] = useState(false);

  // Configuration for the contract read operation
  const { read, data, isError, isLoading } = useContractRead({
    address: oracleAddress,
    abi: oracleABI,
    functionName: 'response', // Ensure this matches your contract's function name
    watch: false, // Prevents automatic subscription
  }, { manual: true }); // `manual: true` is not a standard option in wagmi's useContractRead but used here conceptually to emphasize manual trigger

  // Handle the read operation
  const handleReadClick = async () => {
    setIsReading(true);
    setError('');
    try {
      await read(); // Manual trigger of the contract read
    } catch (err) {
      setError(err.message);
    } finally {
      setIsReading(false);
    }
  };

  // Update the response value when data changes
  React.useEffect(() => {
    if (data) {
      setResponseValue(data.toString());
    }
  }, [data]);

  return (
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Contract Response</h2>
      <button onClick={handleReadClick} disabled={isReading} className="btn btn-primary">
        {isReading ? 'Reading...' : 'Read Response'}
      </button>
      {responseValue && <p>Response value: {responseValue}</p>}
      {isError && error && <div className="text-danger">Error: {error}</div>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default OracleResponseReader;

