// WalletSign.js
import React, { useEffect, useContext, useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { WalletContext } from '../lib/WalletContext';
import { useConnect, useDisconnect, useAccount, useSignMessage } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

function WalletSign() {
  const { signed, setSigned, userAddress, setUserVerified } = useContext(WalletContext);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { signMessage, data, error } = useSignMessage({
    message: 'Sign this message to confirm your wallet and set a rate limit for contract deployment.',
  });

  // State for alert visibility
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

 useEffect(() => {
    console.log("signed state updated:", signed);
    // You can perform actions here that should happen right after signing.
    // For instance, if there are subsequent operations that depend on the `signed` state.
  }, [signed]); // This effect runs whenever the `signed` state changes.


  const handleConnectAndSign1 = async () => {
    try {
      await connect();
      // Assuming you want to trigger sign after connect you can call it here or set up a useEffect to watch isConnected
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

const handleConnectAndSign = async () => {
    try {
      const result = await connect(); // connect returns a result that you can use
	      console.log("set signed was attempted ==", result);
      if (result?.account) {
        setSigned(true); // Set signed state to true
	      console.log("set signed was done ==");
      }
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  const handleSignMessage1 = async () => {
    try {
      await signMessage();
    } catch (signError) {
      console.error('Error signing the message:', signError);
      setAlertMessage(signError.message);
      setShowAlert(true);
    }
  };
const handleSignMessage = async () => {
    try {
	     setSigned(true);
	    console.log("before ======", signed);
      const signature = await signMessage(); // signMessage returns a signature that you can use
	    console.log("after ======");
      if (signature) {
        // Perform additional operations with signature if needed
	     setSigned(true);
	      console.log("signed === if ", signed)
      } else {
         // setSigned(false); 
      }
    } catch (signError) {
      console.error('Error signing the message:', signError);
      setAlertMessage(signError.message);
      setShowAlert(true);
      setSigned(false); // In case of error, you may want to set signed to false
    }
  };
  // useEffect or another logic to call handleSignMessage depending on the UX flow
  // ...
console.log("signed in com == ", signed);
  return (
    <div>
      {showAlert && <Alert variant="danger">{alertMessage}</Alert>}
      {isConnected ? (
        <>
          <Button onClick={() => disconnect()}>Disconnect Wallet</Button>
          <Button onClick={() => handleSignMessage()} disabled={!!data}>Sign to Verify</Button>
          {/* Disable sign button if data is present which means user has signed. */}
        </>
      ) : (
        <Button onClick={() => handleConnectAndSign()}>Connect & Sign Wallet</Button>
      )}
      {error && <Alert variant="warning">Error: {error.message}</Alert>}
    </div>
  );
}

export default WalletSign;

