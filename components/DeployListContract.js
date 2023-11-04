import React, {useState, useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function DeployListContract({
  deployContractAddress,
  deployContractABI,
  listContractAddress,
  initialSupply,
  ipfsProspectusCid,
  ipfsImageCid,
	enabledButton
}) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  // Check if initialSupply is a positive number
  const isInitialSupplyPositive = Number(initialSupply) > 0;
    const [writeError, setWriteError] = useState(null); // Declare state for write errors
 const [txnStatus, setTxnStatus] = useState(null);

  const { config, error } = usePrepareContractWrite({
    address: deployContractAddress,
    abi: deployContractABI,
    functionName: 'deployAndRegisterContract',
    args: isInitialSupplyPositive ? [ipfsProspectusCid, ipfsImageCid, initialSupply] : null,
    enabled: isInitialSupplyPositive, // enable writing only if the condition is met
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const transferName = async () => {
    if (typeof write === 'function' && isInitialSupplyPositive) {
      try {
        const res = await write();
        setTxnStatus("Transaction started on the blockchain");
      } catch (err) {
        setWriteError(err.message);
      }
    } else {
      console.error('write function not available or initial supply not positive');
    }
  };

  if (isSuccess) {
    setExecTransfer(false);
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={transferName}
        disabled={!ipfsImageCid || !ipfsProspectusCid || !enabledButton || !isInitialSupplyPositive || isLoading} // Disable the button when initialSupply is not positive or if loading
      >
        Deploy
      </Button>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
      {txnStatus && !writeError && !error && <div>Transaction Status: {txnStatus}</div>}
    </>
  );
}

export default DeployListContract;

