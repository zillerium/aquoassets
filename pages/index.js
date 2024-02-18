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
import DeFiBuildingBlocks from '../components/DeFiBuildingBlocks'; // Adjust the path as per your directory structure
import TokenizeAssets from '../components/TokenizeAssets'; // Adjust the path as per your directory structure
import LiquidityVoting from '../components/LiquidityVoting'; // Adjust the path as per your directory structure
import AssetDerivatives from '../components/AssetDerivatives'; // Adjust the path as per your directory structure
import TradeDerivatives from '../components/TradeDerivatives'; // Adjust the import path based on your directory structure

const contractAddress = contractData.address;


function Home() {

	const { userAddress, setUserAddress } = useContext(WalletContext);

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

return (
 <div className="contentArea">
      <DeFiBuildingBlocks />
<TokenizeAssets />
<LiquidityVoting />
<AssetDerivatives />
      <TradeDerivatives />


</div>
);


}

export default Home;
