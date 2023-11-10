import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";

function GettingStarted() {


  return (
<Container>
      <div>
        <h1 className="mt-5">Getting Started</h1>
        <h2>Defining Aquo</h2>
        <p>
          Aquo is a site to create liquidity for investors with real-world assets (RWAs).
        </p>
        <h2>How Aquo Works</h2>
        <p>
          Aquo is a solution which enables investors and traders to freely trade digital assets based on RWAs. We outline wallets, tokenization, liquidity and derivatives on this page.
        </p>
        <h2>Wallets</h2>
        <p>
          You will need a wallet such as metamask to use Aquo. We are a non-custodial solution, which means we never directly control your money.
        </p>
        <h2>Tokenizing an Asset</h2>
        <p>
          Tokenizing an asset means a company (called an SPV) owns the asset and that company has shares which are represented as digital tokens on the blockchain.
        </p>
        <h2>Creating Liquidity</h2>
        <p>
          We do this via investment pools, in which RWAs are merged. This is done via a voting process (called DAO voting).
        </p>
        <h2>Derivatives</h2>
        <p>
          Derivatives are contracts (financial instruments) based on an underlying asset, e.g. an option to buy a house in the future. We allow derivatives to be created via smart contracts.
        </p>
      </div>
    </Container>
  );
}

export default GettingStarted;

