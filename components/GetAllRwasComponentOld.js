// GetAllRwasComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, Form } from 'react-bootstrap';

function GetAllRwasComponent({ onRwaIdSelected }) {
  const [rwaData, setRwaData] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    const fetchRwaData = async () => {
      try {
        const response = await axios.get('https://peacioapi.com:3002/getAllRwa');
        setRwaData(response.data); // Assuming the API returns an array of { rwaid, rwaaddress }
      } catch (error) {
        console.error('Failed to fetch RWA data:', error);
      }
    };

    fetchRwaData();
  }, []);

  const handleAddressSelect = (eventKey) => {
    const selectedRwa = rwaData[eventKey];
    setSelectedAddress(selectedRwa.rwaaddress); // Update the selected address state
    if (onRwaIdSelected) {
      onRwaIdSelected(selectedRwa.rwaid); // Call the callback with the selected RWA ID
    }
  };

  return (
    <div>
      {rwaData.length > 0 && (
        <>
          <Dropdown onSelect={handleAddressSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Select Address</Dropdown.Toggle>
            <Dropdown.Menu>
              {rwaData.map((item, index) => (
                <Dropdown.Item key={index} eventKey={index}>{item.rwaaddress}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {selectedAddress && <Form.Label>{selectedAddress}</Form.Label>}
          {selectedAddress && (
            <a href={`https://ipfs.io/ipfs/${selectedAddress}`} target="_blank" rel="noopener noreferrer">View Document</a>
          )}
        </>
      )}
    </div>
  );
}

export default GetAllRwasComponent;

