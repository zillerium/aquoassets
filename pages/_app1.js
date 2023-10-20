import React from 'react';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

	const [execWrite, setExecWrite] = useState(false);
  const [execTransfer, setExecTransfer] = useState(false);
  const [execDeregister, setExecDeregister] = useState(false);
  const [readContract, setReadContract] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [ipfsImageHash, setIpfsImageHash] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [userAddressName, setUserAddressName] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    // Add more user details fields here
  });
  const [newUserName, setNewUserName] = useState("");
  const [shouldRegister, setShouldRegister] = useState(false);

	return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
