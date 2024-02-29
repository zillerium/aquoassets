import React, { useState, useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function DeployPool({
  deployPoolAddress,
  deployPoolABI,
  enabledButton
}) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  // Ensure initialSupply is a positive number
  const [writeError, setWriteError] = useState(null); // State for write errors
  const [txnStatus, setTxnStatus] = useState(null); // State for transaction status

  // Log the data for debugging

  // Prepare contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: deployPoolAddress,
    abi: deployPoolABI,
    functionName: 'deployAndRegisterPool',
    args: [],
    enabled: true,
  });

  // Execute contract write operation
  const { data, isLoading, isSuccess, write, error: writeErrorHook } = useContractWrite(config);

  const deployPool = async () => {
    if (typeof write === 'function' ) {
      try {
        await write();
        setTxnStatus("Transaction initiated on the blockchain.");
      } catch (err) {
        setWriteError(err.message);
      }
    } else {
      console.error('Write function not available or initial supply is not positive.');
    }
  };

  if (isSuccess) {
    setExecTransfer(false); // Reset transfer state on success
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={deployPool}
      >
        Deploy
      </Button>
      {prepareError && <div>Error in preparation: {prepareError.message}</div>}
      {writeError && <div>Error in contract write: {writeError}</div>}
      {writeErrorHook && <div>Error in write hook: {writeErrorHook.message}</div>}
      {txnStatus && !writeError && !prepareError && !writeErrorHook && <div>Transaction Status: {txnStatus}</div>}
    </>
  );
}

export default DeployPool;

