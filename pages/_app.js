import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { WagmiConfig } from "wagmi";
import config from "../wagmi/wagmiConfignew";
import { WalletContext } from "../lib/WalletContext";
import WalletControls from "../components/WalletControls";

const contractAddress = "0xCA3dE00C5Ef4332552Cd4679048514530e1e6F48";


function MyApp({ Component, pageProps }) {

	const [execWrite, setExecWrite] = useState(false);
  const [execTransfer, setExecTransfer] = useState(false);
  const [execDeregister, setExecDeregister] = useState(false);
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [ipfsImageHash, setIpfsImageHash] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [userAddressName, setUserAddressName] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    // Add more user details fields here
  });
  const [newUserName, setNewUserName] = useState("");
  const [shouldRegister, setShouldRegister] = useState(false);

	return (
    <div>
		<WagmiConfig config={config}>
      <WalletContext.Provider
        value={{
          userAddress,
          setUserAddress,
          userAddressName,
          setUserAddressName,
          newUserName,
          setNewUserName,
          execWrite,
          setExecWrite,
          execDeregister,
          setExecDeregister,
          execTransfer,
          setExecTransfer,
          receiverAddress,
          setReceiverAddress,
          ipfsImageHash,
          setIpfsImageHash,
        }}
      >
      <Navigation />
      <Component {...pageProps} />
		      </WalletContext.Provider>
    </WagmiConfig>
    </div>
  );
}

export default MyApp;
