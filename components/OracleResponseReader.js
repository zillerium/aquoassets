import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function OracleResponseReader({oracleAddress, oracleABI }) {

  const config = {
    address: oracleAddress,
    abi: oracleABI,
    functionName: "response",
    //args: [],
  };
console.log("config=", config);
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
      RWA Oracle Price: {data && data.toString()}
    </div>
  );
}

export default OracleResponseReader;

