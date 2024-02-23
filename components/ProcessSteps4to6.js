import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

const ProcessSteps4to6 = () => {
  return (
    <>

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
          <Accordion.Header>6. Register on the DB</Accordion.Header>
          <Accordion.Body>
            Register the prospectus on the DB.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


     <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>7. Tokenize</Accordion.Header>
          <Accordion.Body>
            Your prospectus offering is then tokenized via the Tokenize option.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  );
};

export default ProcessSteps4to6;

