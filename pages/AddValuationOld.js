import React, { useState } from "react";
import AddRwaValuation from "../components/AddRwaValuation";
import { Form } from "react-bootstrap";

function AddValuation() {
  const [rwaId, setRwaId] = useState("");
  const [valuation, setValuation] = useState("");
  const [rwaDesc, setRwaDesc] = useState("");
  const [priceDate, setPriceDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date in YYYY-MM-DD format
  const [currency, setCurrency] = useState("USA");

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
    <div className="container mt-4">
      <h2 className="font-mono mb-4">Add Asset Valuation</h2>
      
      <Form.Group>
        <Form.Label><strong>RWA Desc</strong></Form.Label>
        <Form.Control
          type="text"
          value={rwaDesc}
          onChange={handleRwaDescChange}
          placeholder="Enter RWA Description"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label><strong>Price Date</strong></Form.Label>
        <Form.Control
          type="date"
          value={priceDate}
          onChange={handlePriceDateChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label><strong>Currency</strong></Form.Label>
        <Form.Control
          type="text"
          value={currency}
          onChange={handleCurrencyChange}
          placeholder="Enter Currency"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label><strong>RWA ID</strong></Form.Label>
        <Form.Control
          type="text"
          value={rwaId}
          onChange={handleRwaIdChange}
          placeholder="Enter RWA ID"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label><strong>Valuation</strong></Form.Label>
        <Form.Control
          type="text"
          value={valuation}
          onChange={handleValuationChange}
          placeholder="Enter Valuation (in thousands)"
        />
      </Form.Group>

      <AddRwaValuation
        rwaId={rwaId}
        valuation={valuation}
        rwaDesc={rwaDesc}
        priceDate={priceDate}
        currency={currency}
      />
    </div>
  );
}

export default AddValuation;

