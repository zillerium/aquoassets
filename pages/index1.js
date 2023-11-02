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
        <Container className="bg-white text-dark">
            <Card bg="light" text="dark">
                <Card.Header>
                    <Row>
                        <Col sm={8}>
                            <h1>Investment Management and Liquidity</h1>
                        </Col>
                        <Col sm={4} className="text-left">
                            <WalletControls />
                        </Col>
                    </Row>
                    <WalletDetails />
                </Card.Header>
                <Card.Body>
                    <hr />
<Row className="mb-3 justify-content-md-center">
    <Col xs="auto">
        <Image 
            src="https://ipfs.io/ipfs/QmdTTVmLNh7efCkLwiCc3Zv2h1mQzC7efEAszFmeA5nsSw" 
            width={500} 
            alt="investment opportunities" 
            fluid 
        />
    </Col>
</Row>

<Row className="mb-3">
    <Col>
        <p>Fractional ownership, liquidity, financial instruments and more. At this site you can do the following:</p>

    </Col>
</Row>
<Row>
<Col>
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
             Launch an investment opportunity (prospectus) 
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
             Buy, sell fractional ownership of real-world assets
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
             Create derivatives (financial instruments)
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Real world assets eg real estate, commodities, factories and more</Tab.Pane>
            <Tab.Pane eventKey="#link2">Transfer assets</Tab.Pane>
            <Tab.Pane eventKey="#link3">Create options and other derivatives</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

	 </Col>

	 </Row>

                </Card.Body>
            </Card>
	 <Card>
      <Card.Header>What you can do at Aquo</Card.Header>
      <Card.Body>
        <Card.Title>Investment Opportunities</Card.Title>
        <Card.Text>
	 Real estate opportunities currently listed.
        </Card.Text>
        <Button href="./ListAllProspectusesPage"  variant="primary">Opportunities</Button>
      </Card.Body>
    </Card>
        </Container>
    );

}

export default Home;

