import React, { useState } from "react";
import AddRwaValuation from "../components/AddRwaValuation";
import { Form, Row, Col, Container } from "react-bootstrap";

function AddValuation() {
  const [rwaId, setRwaId] = useState("");
  const [valuation, setValuation] = useState("");
  const [rwaDesc, setRwaDesc] = useState("");
  const [priceDate, setPriceDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date in YYYY-MM-DD format
  const [currency, setCurrency] = useState("USD");

  const handleRwaIdChange = (e) => {
    setRwaId(e.target.value);
  };

  const handleValuationChange = (e) => {
    setValuation(e.target.value);
  };

  const handleRwaDescChange = (e) => {
    setRwaDesc(e.target.value);
  };

  const handlePriceDateChange = (e) => {
    setPriceDate(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="font-mono mb-4 text-center">Add Asset Valuation</h2>
          
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>RWA Desc</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={rwaDesc}
                  onChange={handleRwaDescChange}
                  placeholder="Enter RWA Description"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Price Date</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="date"
                  value={priceDate}
                  onChange={handlePriceDateChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Currency</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={currency}
                  onChange={handleCurrencyChange}
                  placeholder="Enter Currency"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>RWA ID</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={rwaId}
                  onChange={handleRwaIdChange}
                  placeholder="Enter RWA ID"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Valuation</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={valuation}
                  onChange={handleValuationChange}
                  placeholder="Enter Valuation (in thousands)"
                />
              </Col>
            </Form.Group>
          </Form>

          <AddRwaValuation
            rwaId={rwaId}
            valuation={valuation}
            rwaDesc={rwaDesc}
            priceDate={priceDate}
            currency={currency}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AddValuation;

