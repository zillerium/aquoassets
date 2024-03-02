import React, { useState, useContext } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { WalletContext } from '../lib/WalletContext';
import WalletControls from "./WalletControls";
import WalletDetails from "./WalletDetails";
import { Image, Button, Form, Card, Row, Col, Container } from "react-bootstrap";

function Header({
  imageAddress,
	imageLabel,
	pageHeader,
	pageText
}) {


  return (
    <>
	   <Row className="align-items-start my-4"> {/* Align items to the top */}

          <Col xs={12} md={4}>
            <Image src={imageAddress} alt={imageLabel} className="img-fluid d-block mx-auto" />
          </Col>
          {/* Column for Wallet Connect and Title */}
                    <Col xs={12} md={8} className="d-flex flex-column align-items-start"> {/* Flex column to align items to the start */}

                         <WalletControls />
            <h4>{pageHeader}</h4>
                        <p>{pageText}</p>

        {/* Row for Wallet Details */}
          <WalletDetails />
          </Col>

          {/* Column for Image */}

        {/* Row for Wallet Details */}

        </Row>
    </>
  );
}

export default Header;

