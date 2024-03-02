import React, { useState, useContext } from "react";
import AddRwaValuation from "../components/AddRwaValuation";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import GetAllRwasComponent from "../components/GetAllRwasComponent"; // Import the new component
import GetRwaPriceTable from "../components/GetRwaPriceTable"; // Import the GetRwaPriceTable component
import { WalletContext } from "../lib/WalletContext";
import WalletSign from "../components/WalletSign";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import OracleRequest from "../components/OracleRequest";
import oracleABI from "../lib/oracleABI.json";
import oracleAddressData from "../lib/oracleAddress.json";
import getTenABI from "../lib/getTenABI.json";
import getTenAddressData from "../lib/getTenAddress.json";
import OracleResponseReader from "../components/OracleResponseReader"; // Import the new component
import GetTenComponent from "../components/GetTenComponent"; // Import the new component
import Header from "../components/Header";

function AddValuation() {

	  const { isWalletConnected } = useContext(WalletContext);

  const [rwaId, setRwaId] = useState("");
  const [valuation, setValuation] = useState("");
  const [rwaDesc, setRwaDesc] = useState("");
  const [priceDate, setPriceDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date in YYYY-MM-DD format
  const [currency, setCurrency] = useState("USD");
const [password, setPassword] = useState("");

const [showOracleRequest, setShowOracleRequest] = useState(false);
 const handlePostOracleClick = () => {
    setShowOracleRequest(true);
  };

  const handleRwaIdChange = (selectedId) => {
    setRwaId(selectedId); // Update the rwaId state with the selected ID
  };


//  const handleRwaIdChange = (e) => {
//    setRwaId(e.target.value);
//  };

  const handleValuationChange = (e) => {
    setValuation(e.target.value);
  };

  const handleRwaDescChange = (e) => {
    setRwaDesc(e.target.value);
  };

  const handlePriceDateChange = (e) => {
    setPriceDate(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <Container className="mt-4">
	                                <Header
           imageAddress="https://ipfs.io/ipfs/QmfVk74qZvLbbJzwfApb5FNcnsxNTDPT6kwBGtWfhupHBC"
        imageLabel="Add Asset Valuation"
          pageHeader="Add Asset Valuation"
        pageText= "This screen is used to add an off-chain valuation on an RWA"
          />
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="font-mono mb-4 text-center">Add Asset Valuation</h2>
          
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>RWA Desc</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={rwaDesc}
                  onChange={handleRwaDescChange}
                  placeholder="Enter RWA Description"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Price Date</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="date"
                  value={priceDate}
                  onChange={handlePriceDateChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Currency</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={currency}
                  onChange={handleCurrencyChange}
                  placeholder="Enter Currency"
                />
              </Col>
            </Form.Group>
 <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>RWA ID</strong></Form.Label>
              <Col sm="4">
                <GetAllRwasComponent onRwaIdSelected={setRwaId} />
              </Col>
              <Col sm="4">
                <Form.Control
                  size="sm"
                  type="text"
                  value={rwaId}
                  placeholder="Selected RWA ID"
                  readOnly // Make this read-only if you want it to be populated based on dropdown selection
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="4"><strong>Valuation</strong></Form.Label>
              <Col sm="8">
                <Form.Control
                  size="sm"
                  type="text"
                  value={valuation}
                  onChange={handleValuationChange}
                  placeholder="Enter Valuation (in thousands)"
                />
              </Col>
            </Form.Group>
          </Form>
<Form.Group as={Row}>
  <Form.Label column sm="4"><strong>Password</strong></Form.Label>
  <Col sm="8">
    <Form.Control
      size="sm"
      type="password" // Ensure this is type 'password' to hide input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter Password"
    />
  </Col>
</Form.Group>

          <AddRwaValuation
            rwaId={rwaId}
            valuation={valuation}
            rwaDesc={rwaDesc}
            priceDate={priceDate}
            currency={currency}
	    rwapassword={password} // Pass the password as a prop

          />
          {rwaId && <GetRwaPriceTable rwaId={rwaId} />}



        </Col>
      </Row>
        {/* Conditionally render OracleRequest component */}
        {rwaId &&  (
          <Row className="justify-content-md-center my-4">
            <Col md="auto">
              <OracleRequest
                contractAddress={oracleAddressData.address}
                contractABI={oracleABI}
                rwaId={rwaId} // Assuming rwaAddress is the ID you want to use
              />
            </Col>
          </Row>
          )}
        <Row className="justify-content-md-center my-4">
	  <Col md={6}>
	        <Button onClick={handlePostOracleClick} >Show Oracle Response</Button>
          </Col>
	  </Row>
{showOracleRequest  && (
        <Row className="justify-content-md-center my-4">
          <Col md={6}>
            <h3 className="font-mono mb-4 text-center">Oracle Response</h3>
            <OracleResponseReader
              oracleAddress={oracleAddressData.address}
              oracleABI={oracleABI}
            />
          </Col>
        </Row>
      )}


    </Container>
  );
}

export default AddValuation;

