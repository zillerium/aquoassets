import React, { useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Button } from 'react-bootstrap';
import daoContractABI from '../lib/daoContractABI.json'; // Ensure this is the correct path to your DAO contract ABI

function ExecuteDAOProposal({ daoAddress }) {
  const [executeStatus, setExecuteStatus] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);

  // Prepare the contract write operation
  const { config, error: prepareError } = usePrepareContractWrite({
    address: daoAddress,
    abi: daoContractABI,
    functionName: 'executeProposal',
  });

  // Execute the contract write operation
  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      setIsExecuting(false);
      setExecuteStatus('Proposal execution successful!');
    },
    onError(error) {
      setIsExecuting(false);
      setExecuteStatus(`Error: ${error.message}`);
    },
  });

  const handleExecuteClick = async () => {
    setIsExecuting(true);

    if (!write) {
      console.error('Contract write function not available.');
      setIsExecuting(false);
      return;
    }
    await write();
  };

  return (
    <div>
      <Button onClick={handleExecuteClick} >
        Execute
      </Button>
      {prepareError && <p>Error in preparation: {prepareError.message}</p>}
      {executeStatus && <p>{executeStatus}</p>}
    </div>
  );
}

export default ExecuteDAOProposal;

