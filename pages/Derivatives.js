import React, { useState, useContext } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";

function Derivatives() {


  return (
<Container>
      <div>
        <h1 className="mt-5">Derivatives</h1>
        <h2>Derivatives</h2>
        <p>
	  There are several main derivatives in TradFi, Options, Futures, Forwards, and Swaps. At Aquo, we focus on options. The main differentiator is that options are a right to buy or sell (not an obligation for the option holder). 
        </p>
        <h2>Options</h2>
        <p
	  >
	  Aquo options work by a bidding/ask process as with normal options to create a contract. The contract has an expected loss/gain and hence there is a margin needed. This is maintained to avoid a default. The final execution of the option is via a flashloan
        </p>
	  <p>Here is an example. There is a market price of 500K on the POOL token valued at 1K a token (ie 500 tokens). The bidder bids 550K for a sell price in 12 months. The option writer agrees and charges 10K as a premium. Hence the gain is 40K based on the price today. Allowing for a price move due to the market to say 525K and allowing for the 10K premium cost, the bidder will gain 15K in 12 months.
	  </p>
	  <p>
	  Once the contract is formed, the counterparty has to maintain the margin to allow for the option to be exercised. That is the option writer has to pay into a fund 40K has the market moves. If the option is not exercised the money is returned. 
	  </p>
	  <p>The final execution is done via a flashloan so the option writer only ever needs 40K in capital providing the market itself does not collapse. If the assets all devalued due to a market crash, the option writer could be liable for the market crash loss too, eg if the price dropped to 400K for the assets (very unlikely) but the option writer would then be liable for 140K. 
	  </p>
	  <p>
	  As the prices are all supported via oracles, it is unlikley they will fail to that degree but it is possible and then the option writer could hedge via a swap.
	  </p>

	  <h2>Design</h2>
	  <p>
                    <img src="https://ipfs.io/ipfs/QmPDTFgggfFPBb9dD3HEDHSZxHpnvUxWsupqAKpd5DaRYD" alt="Financial Liquidity
" className="img-fluid" />
	  </p>
	  </div>
    </Container>
  );
}

export default Derivatives;

