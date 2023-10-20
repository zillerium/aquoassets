import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function AssetManager({ contractAddress, contractABI, userAddress }) {
	const contextValue = useContext(WalletContext);
console.log("WalletContext value: ", contextValue);

  const { userAddressName, setUserAddressName, ipfsImageHash, setIpfsImageHash } = useContext(WalletContext);

  const config = {
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [userAddress],
  };
  console.log("checking balance == ", config, contractAddress, userAddress);

  const { data, isLoading } = useContractRead(config);

  useEffect(() => {
    console.log("Balance data == ", data);
    if (data) {
      console.log("User Balance: ", data.toString());
      // You can set this balance to state/context if required
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Your Shares: {data && data.toString()}
    </div>
  );
}

export default AssetManager;

