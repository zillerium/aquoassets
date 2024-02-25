import React, { useState } from 'react';
import axios from 'axios';

function AddRwaDBComponent({ rwaPassword, rwaProspectusAddr, rwaKeyDesc }) {
  const [statusMessage, setStatusMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    // Basic validation (adjust as necessary)
    if (!rwaPassword || !rwaProspectusAddr) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('https://peacioapi.com:3002/regRwaAPI', {
        rwaPassword,
	      rwaProspectusAddr,
	      rwaKeyDesc
      });

      // Check the server response
      if (response.data.success) {
        setStatusMessage('RWA DB Entry added successfully!');
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
        <button type="submit">Reg RWA</button>
      </form>
      {statusMessage && <p style={{ color: statusMessage.includes('failed') ? 'red' : 'green' }}>{statusMessage}</p>}
    </div>
  );
}

export default AddRwaDBComponent;

