import React, { useState, useContext } from "react";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import { ListGroup, Tab } from 'react-bootstrap';


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
    <div className="container container-custom">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <h1 className="display-5 mb-2">Making Asset Illiquidity History</h1>
                    <p className="lead mb-3">Tokenized Real World Assets, with Derivatives</p>
                    <button className="btn btn-primary mr-2">Get Started</button>
                    <button className="btn btn-outline-primary">Watch Video</button>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                    <img src="https://ipfs.io/ipfs/QmdTTVmLNh7efCkLwiCc3Zv2h1mQzC7efEAszFmeA5nsSw" alt="Descriptive alt text" className="img-fluid" style={{ maxWidth: '600px' }} />
                </div>
                
            </div>
        </div>
    );
}






export default Home;

