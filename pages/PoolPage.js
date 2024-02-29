// pages/contract.js

import { useRouter } from 'next/router';
import React from 'react';
import GetContractDetails from '../components/GetContractDetails'; // make sure to use the correct path to your component
import ShareholdersList from '../components/ShareholdersList'; // make sure to use the correct path to your component

export default function PoolPage() {
  const router = useRouter();
  const { q } = router.query; // 'q' is the query parameter name

  return (
    <div>
      <h2>Pool Details</h2>
      {q ? (
        <>
          <p>Pool Address: {q}</p>
        </>
      ) : (
        <p>Please provide a contract query parameter.</p>
      )}
    </div>
  );
}

