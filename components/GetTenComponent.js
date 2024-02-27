import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import { WalletContext } from "../lib/WalletContext";

function GetTenComponent({ getTenAddress, getTenABI }) {
  // State for holding the data returned from the contract
  const [tenValue, setTenValue] = useState('');
  // State for holding any potential error message
  const [errorMessage, setErrorMessage] = useState('');

  // Config object for useContractRead
  const configForGetTen = {
    address: getTenAddress,
    abi: getTenABI,
    functionName: 'getTen',
  };

console.log("get ten config = ", configForGetTen);

  // Destructuring data and error from useContractRead and renaming data to tenData
  const { data: tenData, error, isLoading } = useContractRead(configForGetTen);

  // useEffect to handle the response from useContractRead
  useEffect(() => {
	  console.log("get ten == ", tenData);
    if (tenData) {
      // If tenData is present, convert it to a usable format and set the state
      const value = tenData.toString(); // Assuming tenData is a BigNumber and needs to be converted to a string
      setTenValue(value);
    }

    if (error) {
      // If there's an error, log it and set the error message state
      console.error('Error fetching contract data:', error.message);
      setErrorMessage(error.message);
    }
  }, [tenData]); // Depend on tenData and error to re-run the effect

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  //if (errorMessage) {
  //  return <div>Error: {errorMessage}</div>;
 // }

  // Default state showing the data
  return (
    <div>
      Get Ten: {tenValue}
    </div>
  );
}

export default GetTenComponent;

