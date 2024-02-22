import React, { useState } from 'react';
import axios from 'axios';

function AddRwaValuation({ rwaId, valuation, rwaDesc, priceDate, currency }) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!rwaId || isNaN(Number(valuation)) || new Date(priceDate).toString() === "Invalid Date") {
      setErrorMessage('Validation failed: Ensure RWA ID is filled, valuation is a number, and price date is a valid date.');
      return;
    }

    let dbKey = rwaId + ":" + rwaDesc;

    try {
      await axios.post('https://peacioapi.com:3002/addRwaAPI', {
        dbKey,
        rwaId,
        rwaPrice: valuation,
        rwaDesc,
        rwaPriceDate: priceDate,
        rwaCurrency: currency,
      });

      setSubmitted(true);
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('API call error:', error);
      setErrorMessage('Failed to submit: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Valuation</button>
      </form>
      {submitted && <p>Submitted!</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default AddRwaValuation;

