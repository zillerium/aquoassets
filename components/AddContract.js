// TransferAsset.js
import React, { useContext, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

// [200~    function addAsset(string memory ipfsAddress, string memory assetDesc, address contractAddress) public returns (uint256) {

function AddContract({ addContractAddress, addContractABI, userAddress,ipfsImageHash, assetDesc, assetContractAddress  }) {
  const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

console.log(" add contract address ", addContractAddress);
console.log(" user address ", userAddress);
console.log(" ipfs address ", ipfsImageHash);
console.log(" asset desc ", assetDesc);
console.log(" asset contract address ", assetContractAddress);

  const argArr = [ipfsImageHash, assetDesc, assetContractAddress]; 
  const { config, error } = usePrepareContractWrite({
    address: addContractAddress.address,
    abi: addContractABI,
    functionName: 'addAsset',
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
      <Button variant="primary" onClick={transferName}>
        Add Contract 
      </Button>
      {error && <div>Error in formatting {error.message}</div>}
      {writeError && <div>Error in writing to contract: {writeError}</div>}
      {txnStatus && !writeError && !error && (<div>Transaction Status: {txnStatus}</div>)}
    </>
  );
}

export default AddContract;

