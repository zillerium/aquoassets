// pages/contract.js

import { useRouter } from 'next/router';
import React from 'react';
import GetDaoDetails from '../components/GetDaoDetails'; // make sure to use the correct path to your component

export default function DAOPage() {
  const router = useRouter();
  const { q } = router.query; // 'q' is the query parameter name

  return (
    <div>
      <h2>DAO Details</h2>
      {q ? (
        <>
          <p>DAO Address: {q}</p>
	        <GetDaoDetails
            daoAddress={q}
          />
        </>
      ) : (
        <p>Please provide a contract query parameter.</p>
      )}
    </div>
  );
}

