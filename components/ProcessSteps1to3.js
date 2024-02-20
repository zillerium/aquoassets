import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

const ProcessSteps1to3 = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Connect Wallet & Sign</Accordion.Header>
          <Accordion.Body>
            <strong>Aquo is a fully decentralized system</strong> and hence a
            wallet is needed. Your wallet signature confirms you are using the
            re levant screen. This could be Metamask if you are using a web
            browser.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Upload Image</Accordion.Header>
          <Accordion.Body>
            Your local prospectus image should be uploaded to the Aquo site and
            then later registered.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Register Image</Accordion.Header>
          <Accordion.Body>Once uploaded it can be registered.</Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  );
};

export default ProcessSteps1to3;

