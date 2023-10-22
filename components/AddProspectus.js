import React, { useContext, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function AddProspectus({ addProspectusesAddress, addProspectusesABI, userAddress, prospectusCid, ipfsImageHash }) {
    const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);

    const argArr = [prospectusCid, ipfsImageHash];  // Updated to include prospectusCid
    const { config, error } = usePrepareContractWrite({
        address: addProspectusesAddress,
        abi: addProspectusesABI,
        functionName: 'addRecord',
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

export default AddProspectus;

