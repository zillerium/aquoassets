import React, { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import poolContractABI from '../lib/poolContractABI.json'; // Make sure this ABI includes your PoolContract's functions

function GetPoolDetails({ poolContractAddress }) {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState('');
  const [lastSlot, setLastSlot] = useState(0);

  // Read the lastSlot value to know how many slots to iterate through
  const { data: lastSlotData } = useContractRead({
    address: poolContractAddress,
    abi: poolContractABI,
    functionName: 'lastSlot',
  });

  useEffect(() => {
    if (lastSlotData) {
      setLastSlot(parseInt(lastSlotData.toString(), 10));
    }
  }, [lastSlotData]);

  useEffect(() => {
    const readSlots = [];
    for (let i = 1; i <= lastSlot; i++) {
      readSlots.push(
        useContractRead({
          address: poolContractAddress,
          abi: poolContractABI,
          functionName: 'slotToAddress',
          args: [i],
        })
      );
    }
    Promise.all(readSlots).then((slotAddresses) => {
      const slotDetails = slotAddresses.map((address, index) => ({
        slot: index + 1,
        rwaContractAddress: address.data,
      }));
      setSlots(slotDetails);
    });
  }, [lastSlot]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Pool Slots and RWA Contracts</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Slot Number</th>
            <th scope="col">RWA Contract Address</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slotDetail) => (
            <tr key={slotDetail.slot}>
              <td>{slotDetail.slot}</td>
              <td>
                <a href={`/ContractPage?q=${slotDetail.rwaContractAddress}`} target="_blank" rel="noopener noreferrer">
                  {slotDetail.rwaContractAddress}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetPoolDetails;

