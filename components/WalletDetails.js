import React, { useContext, useEffect } from 'react';
import { WalletContext } from '../lib/WalletContext';
import { useBalance, useAccount } from 'wagmi';

function WalletDetails() {
  const { userAddress, setUserAddress } = useContext(WalletContext);
  const { address, isConnected } = useAccount(); // Get the isConnected status
  const { data, isError, isLoading } = useBalance({
    address,
  });

  useEffect(() => {
    setUserAddress(address);
  }, [address, setUserAddress]);

  // Conditionally render the component based on the wallet connection status
  if (!isConnected) {
    return null; // Return null to hide the component when not connected
  }
           // {userAddress} | Holesky, Goerli | {data?.formatted} {data?.symbol}
console.log("data =", data);
  return (
    <div style={{ background: '#ffffff', padding: '10px', borderRadius: '5px' }}>
	  <p>
        {userAddress && (
          <span>
            {userAddress} |  {data?.formatted} {data?.symbol}
          </span>
        )}
      </p>
    </div>
  );
}

export default WalletDetails;

