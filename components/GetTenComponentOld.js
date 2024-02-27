import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function GetTenComponent({getTenAddress, getTenABI }) {

  const config = {
    address: getTenAddress,
    abi: getTenABI,
    functionName: "getTen",
    args: [],
  };
console.log("get ten config=", config);
  const { data, isLoading, error } = useContractRead(config);

  useEffect(() => {

 if (error) {
    console.error("Error fetching contract data:", error.message);
  }

    console.log("Balance data == ", data);
    if (data) {
      console.log("User Balance: ", data.toString());
      // You can set this balance to state/context if required
    }
  }, [data, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      get Ten: {data && data.toString()}
    </div>
  );
}

export default GetTenComponent;

