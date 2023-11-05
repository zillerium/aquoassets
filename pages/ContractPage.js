// pages/contract.js

import { useRouter } from 'next/router';
import React from 'react';
import GetContractDetails from '../components/GetContractDetails'; // make sure to use the correct path to your component
import aggregatorContractABI from '../lib/aggregatorContractABI.json';
import aggregatorContractAddress from '../lib/aggregatorContractAddress.json';

export default function ContractPage() {
  const router = useRouter();
  const { q } = router.query; // 'q' is the query parameter name

  return (
    <div>
      <h2>Contract Details</h2>
      {q ? (
        <>
          <p>Contract Address: {q}</p>
          <GetContractDetails
            contractAddress={q}
            aggregatorContractAddress={aggregatorContractAddress.address}
            aggregatorContractABI={aggregatorContractABI}
          />
        </>
      ) : (
        <p>Please provide a contract query parameter.</p>
      )}
    </div>
  );
}

