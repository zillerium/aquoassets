import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useContractRead, usePrepareContractWrite, useContractWrite } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function TransferAsset({ contractAddress, contractABI }) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  const [walletAddress, setWalletAddress] = React.useState('');
  const [sharesToTransfer, setSharesToTransfer] = React.useState(0);
  const [writeError, setWriteError] = React.useState(null);
  const [txnStatus, setTxnStatus] = React.useState(null);

  const argArr = [walletAddress, sharesToTransfer];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'transfer',
    args: argArr,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const transferName = async () => {
    try {
      const res = await write();
      console.log('-- res', res);
      setTxnStatus("Transaction started on the blockchain");
    } catch (err) {
      console.log('---- err', err);
      setWriteError(err.message);
    }
  };

  if (isSuccess) {
    setExecTransfer(false);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChange={e => setWalletAddress(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number of Shares"
        value={sharesToTransfer}
        onChange={e => setSharesToTransfer(Number(e.target.value))}
      />

      <div>
        <Button variant="primary" onClick={transferName}>
          Confirm Transfer
        </Button>
      </div>

      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
      {txnStatus && !writeError && !error && (<div>Transaction Status: {txnStatus}</div>)}
    </>
  );
}

export default TransferAsset;

