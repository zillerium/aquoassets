import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap"; // Import Table from react-bootstrap

function GetRwaPriceTable({ rwaId }) {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the API service, passing the rwaId as a parameter
        const response = await axios.get(`https://peacioapi.com:3002/getAllRwaPriceData/${rwaId}`);
        setPriceData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('API call error:', error);
      }
    };

    if (rwaId) {
      fetchData();
    }
  }, [rwaId]); // The effect depends on rwaId and will re-run when rwaId changes

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>RWA ID</th>
            <th>Date</th>
            <th>Price (K)</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {priceData.map((data, index) => (
            <tr key={index}>
              <td>{data.rwaId}</td>
              <td>{new Date(data.rwaPriceDate).toLocaleDateString()}</td> {/* Format the date for display */}
                    <td>{data.rwaPrice.$numberDecimal}</td> {/* Access the $numberDecimal property */}
              <td>{data.rwaCurrency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {priceData.length === 0 && <p>No price data available for the specified RWA ID.</p>}
    </div>
  );
}

export default GetRwaPriceTable;

