import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

const ProcessSteps = () => {
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

      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Upload Prospectus</Accordion.Header>
          <Accordion.Body>
            Your local PDF document should be uploaded to the system.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Register Prospectus</Accordion.Header>
          <Accordion.Body>
            Your prospectus should then be registered into the system.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Tokenize</Accordion.Header>
          <Accordion.Body>
            Your prospectus offering is then tokenized via the Tokenize option.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ProcessSteps;

