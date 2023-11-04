import React, { useContext, useState } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

//function DeployListContract({ addDeployListAddress, addDeployListABI,  initialSupply }) {
function DeployListContract({
deployContractAddress,
	deployContractABI,
	listContractAddress,
	initialSupply,
	ipfsProspectusCid,
	ipfsImageCid
}) {
const { receiverAddress, execTransfer, setExecTransfer } = useContext(WalletContext);
console.log(deployContractAddress);
    const argArr = [ipfsProspectusCid, ipfsImageCid, initialSupply];  // Updated to include prospectusCid
    const { config, error } = usePrepareContractWrite({
        address: deployContractAddress,
        abi: deployContractABI,
        functionName: 'deployAndRegisterContract',
        args: argArr,
    });
console.log(config)
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
            <Button variant="primary" onClick={transferName}
        disabled={isNaN(initialSupply) || initialSupply <= 0} // Disable the button if initialSupply is not a valid number or less than or equal to 0

	    >
                Deploy  
            </Button>
            {error && <div>Error in formatting {error.message}</div>}
            {writeError && <div>Error in writing to contract: {writeError}</div>}
            {txnStatus && !writeError && !error && (<div>Transaction Status: {txnStatus}</div>)}
        </>
    );
}

export default DeployListContract;

