import React, { useState, useContext } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import NewUserNameInput from "../components/NewUserNameInput";
import { WagmiConfig } from "wagmi";
import { WalletContext } from "../lib/WalletContext";
import ContractWrite from "../components/ContractWrite";
import RegisterComponent from "./RegisterComponent";
import ContractDeregister from "../components/ContractDeregister";
import config from "../wagmi/wagmiConfignew";
import WalletControls from "../components/WalletControls";
import UserDetails from "../components/UserDetails";
import AssetManager from "../components/AssetManager";
import WalletDetails from "../components/WalletDetails";
import ContractRead from "../components/ContractRead";
import LoadImageIpfs from "../components/LoadImageIpfs";
import contractABI from "../lib/contractABI.json";
import { Button } from "react-bootstrap";
import DeregisterComponent from "./DeregisterComponent";
import ReadContractComponent from "./ReadContractComponent";
import TransferNamePage from "./TransferNamePage";
import contractData from "../lib/contractAddress.json";

const contractAddress = contractData.address;


function Home() {

	const { userAddress, setUserAddress } = useContext(WalletContext);

  const updateUserDetails = (newUserDetails) => {
    setUserDetails(newUserDetails);
  };

  const handleReadContractClick = () => {
    setReadContract(true);
  };

  const handleReadContractClickFalse = () => {
    setReadContract(false);
  };

  const changeExecWrite = () => {
    setExecWrite(true);
  };
  return (
        <Container className="bg-black text-light">
          <Card bg="black" text="light">
            <Card.Header>
              <Row>
                <Col sm={8}>
                  {" "}
                  <h1>Name Registry for Wallets</h1>
                </Col>
                <Col sm={4} className="text-left">
                  <WalletControls />
                </Col>
              </Row>
              <WalletDetails />
            </Card.Header>
            <Card.Body>
              <hr />
              <Row>
                <Col>
                  {userAddress ? (
                    <AssetManager
                      contractAddress={contractAddress}
                      contractABI={contractABI}
                     userAddress={userAddress}
                    />
                  ) : (
                    <p>Connect your wallet to transfer your name.</p>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "1px solid lightgrey",
                      padding: "10px",
                    }}
                  >
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
  );
}

export default Home;

