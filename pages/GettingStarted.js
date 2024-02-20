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
          Aquo is a site to tokenize RWAs (real-word assets), create liquidity via pools, create derivatives (financial instruments), and trade derivatives. This frees up capital and allows growth via financial instruments. The systems operate globally without time limits.
        </p>
        <h2>How Aquo Works</h2>
        <p>
	  Aquo has several components. These involve listing an investment prospectus, achieving investment, tokenizing the RWA, creating the investment pool via votes, creating financial instruments, and trading.
        </p>
	  <h2>Liquidity</h2>
	  <p>Liquidity is an essential part of all financial systems. The liquidity model at Aquo is <a href="https://youtube.com/watch?v=n_MybVp4gvg" target="_blank">explained</a> at youtube.</p>
        <h2>Wallets</h2>
        <p>
          You will need a wallet such as metamask to use Aquo. We are a non-custodial solution, which means we never directly control your money.
        </p>
        <h2>Tokenizing an Asset</h2>
        <p>
          Tokenizing an asset means a company (called an SPV) owns the asset and that company has shares which are represented as digital tokens on the blockchain.
         This is <a href="https://www.youtube.com/watch?v=m67SpbLPbDI" target="_blank">explained</a> at youtube.</p>
        <h2>Creating Liquidity</h2>
        <p>
	  This is done via POOL tokens (see the Technical page for details). This is <a href="https://www.youtube.com/watch?v=6UrztxH396o" target="_blank">explained</a> at youtube.
        </p>
        <h2>Derivatives</h2>
        <p>
          Derivatives are contracts (financial instruments) based on an underlying asset, e.g. an option to buy a house in the future. We allow derivatives to be created via smart contracts.
        This is explained at <a href="https://www.youtube.com/watch?v=0zZaLPfg8L8" target="_blank">explained</a> at youtube.

	  </p>
	  <h2>Demo</h2><p>
	  <a href="https://www.youtube.com/watch?v=qJVm2Z43IkI" target="_blank">Demo</a>
      </p>
	  </div>
    </Container>
  );
}

export default GettingStarted;

