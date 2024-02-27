import React, { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Button } from "react-bootstrap";

function OracleRequest({
  contractAddress,
  contractABI,
  rwaId,
}) {
  const [writeError, setWriteError] = useState(null);
  const [txnStatus, setTxnStatus] = useState(null);

  // Prepare contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'request',
    args: [rwaId],
  });
 console.log("config = ", config);
  // Execute the write operation
  const { write, isLoading, isSuccess } = useContractWrite(config);

  // Function to execute the write operation
  const executeRequest = async () => {
    if (write) {
      try {
        const res = await write();
        setTxnStatus("Transaction started on the blockchain");
      } catch (err) {
        setWriteError(err.message);
      }
    } else {
      console.error('Write function not available');
    }
  };

  // Display transaction status, errors, and a button to trigger the write operation
  return (
    <div>

<Button 
      onClick={executeRequest} 
      disabled={isLoading || !rwaId}
      variant="primary" // Sets the Bootstrap theme color
    >
      Update Oracle for id {rwaId || '...'} {/* Display rwaId or '...' if rwaId is not available */}
    </Button>

      {prepareError && <div>Error preparing write: {prepareError.message}</div>}
      {writeError && <div>Error executing write: {writeError}</div>}
      {txnStatus && !writeError && !prepareError && <div>{txnStatus}</div>}
      {isSuccess && <div>Transaction successful!</div>}
    </div>
  );
}

export default OracleRequest;

