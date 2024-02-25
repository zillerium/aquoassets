// GetAllRwasComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, Form } from 'react-bootstrap';

function GetAllRwasComponent({ onRwaIdSelected }) {
  const [rwaData, setRwaData] = useState([]);
  const [selectedRwa, setSelectedRwa] = useState(null); // Changed to handle the entire selected RWA object

  useEffect(() => {
    const fetchRwaData = async () => {
      try {
        const response = await axios.get('https://peacioapi.com:3002/getAllRwa');
        setRwaData(response.data); // Assuming the API returns an array of { rwaid, rwaaddress, rwaKeyDesc }
      } catch (error) {
        console.error('Failed to fetch RWA data:', error);
      }
    };

    fetchRwaData();
  }, []);

  const handleRwaSelect = (eventKey) => {
    const selected = rwaData[eventKey];
    setSelectedRwa(selected); // Update the selected RWA object
    if (onRwaIdSelected) {
      onRwaIdSelected(selected.rwaid); // Call the callback with the selected RWA ID, if needed
    }
  };

  return (
    <div>
      {rwaData.length > 0 && (
        <>
          <Dropdown onSelect={handleRwaSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Select RWA</Dropdown.Toggle>
            <Dropdown.Menu>
              {rwaData.map((item, index) => (
                <Dropdown.Item key={index} eventKey={index}>{item.rwaKeyDesc}</Dropdown.Item> // Displaying rwaKeyDesc in the dropdown
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {selectedRwa && (
            <>
		   <p>{selectedRwa.rwaKeyDesc}</p>
              <Form.Label>ID: {selectedRwa.rwaid}</Form.Label> {/* Displaying the selected RWA ID */}
              <Form.Label>Address: {selectedRwa.rwaaddress}</Form.Label> {/* Displaying the selected RWA address */}
              <a href={`https://ipfs.io/ipfs/${selectedRwa.rwaaddress}`} target="_blank" rel="noopener noreferrer">View Document</a>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default GetAllRwasComponent;

