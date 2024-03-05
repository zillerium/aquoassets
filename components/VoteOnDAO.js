import React, { useState, useEffect } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite, useSigner } from 'wagmi';
import { Button, Form } from 'react-bootstrap';
import daoContractABI from '../lib/daoContractABI.json'; // Make sure to replace this with the actual ABI of your DAO contract

function VoteOnDAO({ daoAddress }) {
  const { address: userWalletAddress } = useAccount();
  const [userVote, setUserVote] = useState(null);
  const [isVoting, setIsVoting] = useState(false);
  const [voteStatus, setVoteStatus] = useState('');

  const { config } = usePrepareContractWrite({
    address: daoAddress,
    abi: daoContractABI,
    functionName: 'vote',
    args: [userVote],
  });

  const { write } = useContractWrite({
    ...config,
    onSuccess(data) {
      setIsVoting(false);
      setVoteStatus('Vote successful!');
    },
    onError(error) {
      setIsVoting(false);
      setVoteStatus(`Error: ${error.message}`);
    },
  });

  const handleVoteChange = (e) => {
    setUserVote(e.target.value === 'yes');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsVoting(true);

    if (!write) {
      console.error('Contract write function not available.');
      setIsVoting(false);
      return;
    }
    await write();
  };

  useEffect(() => {
    if (!userWalletAddress) {
      setVoteStatus('Please connect your wallet to vote.');
    } else {
      setVoteStatus('');
    }
  }, [userWalletAddress]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Vote on Proposal</Form.Label>
          <div key={`inline-radio`} className="mb-3">
            <Form.Check
              inline
              label="Yes"
              name="vote"
              type="radio"
              id={`inline-radio-yes`}
              value="yes"
              onChange={handleVoteChange}
              disabled={isVoting}
            />
            <Form.Check
              inline
              label="No"
              name="vote"
              type="radio"
              id={`inline-radio-no`}
              value="no"
              onChange={handleVoteChange}
              disabled={isVoting}
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" >VOTE
        </Button>
      </Form>
      {voteStatus && <p>{voteStatus}</p>}
    </div>
  );
}

export default VoteOnDAO;

