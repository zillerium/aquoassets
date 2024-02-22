import React, { useState } from 'react';
import axios from 'axios';

function AddRwaValuation({ rwaId, valuation, rwaDesc, priceDate, currency }) {
  const [statusMessage, setStatusMessage] = useState('');

  const submitData = async () => {
    try {
      const response = await axios.post('https://peacioapi.com:3001/addRwaAPI', {
        rwaId,
        rwaPrice: valuation, // Assuming 'valuation' represents 'rwaPrice'
        rwaDesc,
        rwaPriceDate: priceDate,
        rwaCurrency: currency,
      });

      // Assuming the API returns some success message on successful addition
      setStatusMessage('Record added successfully');
      console.log(response.data); // For debugging purposes, you might want to see the full response
    } catch (error) {
      console.error('Error adding record:', error);
      setStatusMessage('Failed to add record');
    }
  };

  return (
    <div>
      <button onClick={submitData}>Submit Valuation</button>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default AddRwaValuation;

