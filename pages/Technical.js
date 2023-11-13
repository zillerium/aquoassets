import React, { useState, useContext } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";

function Technical() {


  return (
<Container>
      <div>
        <h1 className="mt-5">Tokens</h1>
        <h2>Aquo Design</h2>
        <p>
	  Aquo creates liquidity by using POOL tokens and tokens for the individual ASSETS. 
        </p>
        <h2>Tokenizing Assets</h2>
        <p>
	  A real-world asset (RWA) is tokenized based on its Oracle value. The Oracle value is derived from confirmed RWA valuations, eg a survey for a house. Hence if a house is valued at 100K USD and there are 100 HOUSE tokens then each token is worth 1000 USD.
        </p>

        <h2>Liquidity Problem</h2>
        <p>
	  With a small valuation, then no liquidity is achieved and the tokenized assets have the same problem as just owning shares in a house via an SPV.
        </p>
        <h2>POOL</h2>
        <p>
	  The POOL is valued at a combination of all assets which join the POOL. For example, if we have 100 houses at a 100K each, then we have a POOL value of 10 million dollars. This is aggregated value of all the Oracle valuations for the underlying assets.
        </p>
	  <p>Then we mint POOL tokens for that asset value. These token holders for the POOL token can then trade and they will have liquidity.</p>
        <h2>POOL Token</h2>
        <p>
	  The assets have a valuation but no liquidity, but they can trade with POOL tokens, eg if a HOUSE token is valued at 500 USD and the POOL token value is 1000 USD, then 2 HOUSE tokens = 1 POOL token in value. Therefore asset holders can trade their asset tokens for POOL tokens. 
        </p>
        <h2>Liquidity POOL</h2>
	  <p>A liquidity pool is then maintained via investors using a stablecoin.</p>
        <h2>Trading POOL tokens</h2>
        <p>
	  POOL tokens can trade via an AMM to the LP coins and via Oracles. So this means the POOL tokens can trade to USDC coins and the LP pool will own some of the POOL tokens, which can also be sold for USDC. This creates liquidity. The AMM (automated market maker) supplies the price based on Oracles.
        </p>
	  <p>
                    <img src="https://ipfs.io/ipfs/Qmbh8cHhmrgu5RUs3FrJaup2nE4QG6mBo3Wisejr1YXvcj" alt="Financial Liquidity
" className="img-fluid" />
	  </p>
	  </div>
    </Container>
  );
}

export default Technical;

