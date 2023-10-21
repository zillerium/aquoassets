// TransferAsset.js
import React, { useContext, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function TransferAsset({ contractAddress, contractABI }) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  const [walletAddress, setWalletAddress] = useState("");
  const [numShares, setNumShares] = useState(0);

  const argArr = [walletAddress, numShares]; 
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'transfer',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const [writeError, setWriteError] = useState(null);
  const [txnStatus, setTxnStatus] = useState(null);

  const transferName = async () => {
    if (typeof write === 'function') {
      try {
        const res = await write();
        console.log('-- res', res);
        setTxnStatus("Transaction started on the blockchain");
      } catch (err) {
        console.log('---- err', err);
        setWriteError(err.message);
      }
    } else {
      console.error('write is not available or not a function');
    }
  };

  if (isSuccess) {
    setExecTransfer(false);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Wallet Address"
          value={walletAddress}
          onChange={e => setWalletAddress(e.target.value)}
        />
        <FormControl
          placeholder="Number of Shares"
          type="number"
          value={numShares}
          onChange={e => setNumShares(e.target.value)}
        />
      </InputGroup>
      <Button variant="primary" onClick={transferName}>
        Confirm Transfer
      </Button>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
      {txnStatus && !writeError && !error && (<div>Transaction Status: {txnStatus}</div>)}
    </>
  );
}

export default TransferAsset;

