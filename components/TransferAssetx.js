// TransferAsset.js
import React, { useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button } from 'react-bootstrap';

function TransferAsset({ contractAddress, contractABI }) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

  const argArr = ['0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5', 100 ];
  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: 'transfer',
    args: argArr,
  });
console.log("config == ", config);
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const [writeError, setWriteError] = React.useState(null);
  const [txnStatus, setTxnStatus] = React.useState(null);

  const transferName = async () => {
    try {
      const res = await write?.();
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

