import React, { useState, useContext } from "react";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import { ListGroup, Tab } from 'react-bootstrap';
import Head from 'next/head';


import { WagmiConfig } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
import RegisterComponent from "./RegisterComponent";
import config from "../wagmi/wagmiConfignew";
import WalletControls from "../components/WalletControls";
import UserDetails from "../components/UserDetails";
import AssetManager from "../components/AssetManager";
import WalletDetails from "../components/WalletDetails";
import contractABI from "../lib/contractABI.json";
import ReadContractComponent from "./ReadContractComponent";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;


function Home() {

	const { userAddress, setUserAddress } = useContext(WalletContext);

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

return (
 <div className="contentArea">

    <div > {/* Setting the background color to blue */}
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12"> {/* Adjusting for mobile */}
                    <h1 className="display-5 mb-2 text-white">Make Your Assets Liquid</h1>
                    <p className="lead mb-3 text-white">Tokenized Real World Assets, with Derivatives</p>
                    <button className="btn btn-light mr-2">Get Started</button>
                    <button className="btn btn-outline-light">Watch Video</button>
                </div>
                <div className="col-lg-6 col-12 mt-4 mt-lg-0"> {/* Adjusting for mobile */}
                    <img src="https://ipfs.io/ipfs/QmZFpRw61fRmKh6JwNnAyrDi9mSMPh6DZEJmLhDMrWRgv7" alt="Financial Liquidity" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</div>
);


}

export default Home;
