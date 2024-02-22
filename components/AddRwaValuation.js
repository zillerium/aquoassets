import React, { useState } from 'react';
import axios from 'axios';

function AddRwaValuation({ rwaId, valuation, rwaDesc, priceDate, currency }) {
  const [statusMessage, setStatusMessage] = useState(''); // Updated state to handle all messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Clear previous messages

    // Basic validation
    if (!rwaId || isNaN(Number(valuation)) || new Date(priceDate).toString() === "Invalid Date") {
      setStatusMessage('Validation failed: Ensure RWA ID is filled, valuation is a number, and price date is a valid date.');
      return;
    }

    let dbKey = rwaId + ":" + rwaDesc;

    try {
      const response = await axios.post('https://peacioapi.com:3002/addRwaAPI', {
        dbKey,
        rwaId,
        rwaPrice: valuation,
        rwaDesc,
        rwaPriceDate: priceDate,
        rwaCurrency: currency,
      });

      // Check the server response
      if (response.data.rtn === 0) {
        setStatusMessage('Submission successful!');
      } else {
        setStatusMessage('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('API call error:', error);
      setStatusMessage(`Failed to submit: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Valuation</button>
      </form>
      {statusMessage && <p style={{ color: statusMessage.includes('failed') ? 'red' : 'green' }}>{statusMessage}</p>}
    </div>
  );
}

export default AddRwaValuation;
