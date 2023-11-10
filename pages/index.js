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
        <a href="./UploadAndAddPage" className="btn btn-light mr-2 text-dark text-decoration-none">Get Started</a>
            <span className="mx-2"></span> {/* Add space between buttons */}

<a href="https://www.youtube.com/shorts/dlyxOd8P9uk" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn btn-dark btn-outline-light mr-2 text-white text-decoration-none custom-video-button">
               Watch Video
            </a>

                </div>
                <div className="col-lg-6 col-12 mt-4 mt-lg-0"> {/* Adjusting for mobile */}
                    <img src="https://ipfs.io/ipfs/QmZFpRw61fRmKh6JwNnAyrDi9mSMPh6DZEJmLhDMrWRgv7" alt="Financial Liquidity" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
	<div style={{ backgroundColor: "white" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={12}>
              <Image
                src="https://ipfs.io/ipfs/QmNQVj8wup1kx89QZ8o7ysZjvnZ6Vy8st8deJVF8c2jqCQ"
                alt="House fractionally owned"
                fluid
              />
            </Col>
            <Col lg={6} xs={12}>
	  <h1 className="display-5 mb-2 text-black">Tokenize Real World Assets to create blockchain tokens.</h1>
            </Col>
          </Row>
        </Container>
      </div>
<div style={{ backgroundColor: "white" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={12}>
                <h1 className="display-5 mb-2 text-black">Merge assets to create liquidity via voting</h1>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                src="https://ipfs.io/ipfs/QmZsxZ9nHBU5sbg9dxueUGdfuKN2ibYYqEoGk3eZGD8rq8"
                alt="Create Liquidity"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>
<div style={{ backgroundColor: "white" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={12}>
              <Image
                src="https://ipfs.io/ipfs/QmNfdVvMajNmEw8buJTK56QJSwxn9Fsa4qvztdXqPUqyp1"
                alt="Derivatives"
                fluid
              />
            </Col>
            <Col lg={6} xs={12}>
          <h1 className="display-5 mb-2 text-black">Create derivatives on assets (options to buy)</h1>
            </Col>
          </Row>
        </Container>
      </div>

	<div style={{ backgroundColor: "white" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={12}>
                <h1 className="display-5 mb-2 text-black">Trade derivatives, hedge and speculate</h1>
            </Col>
            <Col lg={6} xs={12}>
              <Image
                src="https://ipfs.io/ipfs/QmUrmW9mztBYaqV1tABAXkR4cMotgvvTe9F2kF4ikKfhhE"
                alt="Derivatives"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </div>

</div>
);


}

export default Home;
