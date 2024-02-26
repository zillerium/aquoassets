import React, { useState, useEffect } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

function OracleRequest({ contractAddress, contractABI, rwaId }) {
  const [writeError, setWriteError] = useState(null);
  const [txnStatus, setTxnStatus] = useState(null);

  // Prepare contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'request',
    args: [rwaId],
  });

  // Execute the write operation
  const { write, isLoading, isSuccess } = useContractWrite(config);

  // useEffect to trigger the write operation immediately when the component mounts
  useEffect(() => {
    const executeRequest = async () => {
      if (write && rwaId) {
        try {
          const res = await write();
          setTxnStatus("Transaction started on the blockchain");
        } catch (err) {
          setWriteError(err.message);
        }
      } else {
        console.error('Write function not available or rwaId not provided');
      }
    };

    executeRequest();
  }, [write, rwaId]); // Dependency array to ensure this effect only runs when `write` or `rwaId` changes

  // Display transaction status and errors
  return (
    <div>
      {isLoading && <div>Transaction is being processed...</div>}
      {prepareError && <div>Error preparing write: {prepareError.message}</div>}
      {writeError && <div>Error executing write: {writeError}</div>}
      {txnStatus && !writeError && !prepareError && <div>{txnStatus}</div>}
      {isSuccess && <div>Transaction successful!</div>}
    </div>
  );
}

export default OracleRequest;

