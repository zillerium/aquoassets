import React, { useState, useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function DeployDAO({
  deployDAOAddress,
  deployDAOABI,
	rwaContract,
	poolAddress,
	dilutionFactor,
  enabledButton
}) {

console.log("dao addres - ", deployDAOAddress);
	console.log("dao abi", deployDAOABI);
	console.log("pool address", poolAddress);
	console.log("dilution factor", dilutionFactor);
	console.log("rwa con ", rwaContract);

  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  // Ensure initialSupply is a positive number
  const [writeError, setWriteError] = useState(null); // State for write errors
  const [txnStatus, setTxnStatus] = useState(null); // State for transaction status

  // Log the data for debugging

  // Prepare contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: deployDAOAddress,
    abi: deployDAOABI,
    functionName: 'deployAndRegisterDAO',
    args: [rwaContract, poolAddress, dilutionFactor],
    enabled: true,
  });
console.log("con=", config);
  // Execute contract write operation
  const { data, isLoading, isSuccess, write, error: writeErrorHook } = useContractWrite(config);

  const deployDAO = async () => {
    if (typeof write === 'function' ) {
      try {
        await write();
        setTxnStatus("Transaction initiated on the blockchain.");
      } catch (err) {
        setWriteError(err.message);
      }
    } else {
      console.error('Write function not available or RWA empty.');
    }
  };

  if (isSuccess) {
    setExecTransfer(false); // Reset transfer state on success
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={deployDAO}
	          disabled={!enabledButton || !deployDAOAddress || !rwaContract || !poolAddress || !dilutionFactor} // Use the enabledButton prop and check for required fields

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

export default DeployDAO;

