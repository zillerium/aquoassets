import React, { useEffect, useState, useContext } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { useContractRead } from "wagmi";
import { WalletContext } from "../lib/WalletContext";

function AssetManager({ contractAddress, contractABI, userAddress }) {
  const contextValue = useContext(WalletContext);
  console.log("WalletContext value: ", contextValue);

  const { userAddressName, setUserAddressName, ipfsImageHash, setIpfsImageHash } = useContext(WalletContext);

  const [inputAddress, setInputAddress] = useState(""); // This state will store the address entered by the user

  const addressToCheck = inputAddress || userAddress; // Use input address if provided, else use the user's address

  const config = {
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [addressToCheck],
  };
  console.log("checking balance == ", config, contractAddress, addressToCheck);

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
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Wallet Address (defaults to your address)"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
        />
        <InputGroup.Append>
          <Button onClick={() => {}}>Check Balance</Button>
        </InputGroup.Append>
      </InputGroup>
      Your Shares: {data && data.toString()}
    </div>
  );
}

export default AssetManager;

