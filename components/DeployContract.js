import React, { useState, useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function DeployContract({
  deployContractAddress,
  deployContractABI,
  initialSupply,
  ipfsProspectusCid,
  ipfsImageCid,
  enabledButton
}) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  // Ensure initialSupply is a positive number
  const isInitialSupplyPositive = Number(initialSupply) > 0;
  const [writeError, setWriteError] = useState(null); // State for write errors
  const [txnStatus, setTxnStatus] = useState(null); // State for transaction status

  // Log the data for debugging
  console.log("Data for new record: ", ipfsProspectusCid, ipfsImageCid, initialSupply);

  // Prepare contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: deployContractAddress,
    abi: deployContractABI,
    functionName: 'deployAndRegisterContract',
    args: [ipfsProspectusCid, ipfsImageCid, initialSupply],
    enabled: isInitialSupplyPositive && enabledButton, // Enable writing only if initialSupply is positive and button is enabled
  });

  // Execute contract write operation
  const { data, isLoading, isSuccess, write, error: writeErrorHook } = useContractWrite(config);

  const deployContract = async () => {
    if (typeof write === 'function' && isInitialSupplyPositive) {
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
        onClick={deployContract}
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

export default DeployContract;

