import React, { useContext, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { create } from 'ipfs-http-client';
import { WalletContext } from '../lib/WalletContext';

function LoadPdfIpfsCid({enabledButton}) {
  const [productImage, setProductImage] = useState(null);
//  const { ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid,ipfsPdfCid, setIpfsPdfCid } = useContext(WalletContext);
 const { imageClientName, setImageClientName, pdfClientName, setPdfClientName,ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid,ipfsPdfCid, setIpfsPdfCid } = useContext(WalletContext);

	const [ipfsImageUrl, setIpfsImageUrl] = useState(null);

  const onChangePdf = (e) => {
    setProductImage(e.target.files[0]);
	    setPdfClientName(e.target.files[0].name); // Update imageClientName

  };

  const handleViewIpfs = (e) => {
	  e.preventDefault();
    if (ipfsPdfCid) {
      setIpfsPdfCid(`https://ipfs.io/ipfs/${ipfsImageHash}`);
    }
  };

  const loadIpfsPdf = async () => {
    const ipfs = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_REACT_APP_INFURA_PROJECT_ID}:${process.env.NEXT_PUBLIC_REACT_APP_INFURA_API_KEY}`
        ).toString('base64')}`,
      },
    });
console.log("ipfs -- ", process.env.NEXT_PUBLIC_REACT_APP_INFURA_PROJECT_ID);
    const pdfFile = await productImage.arrayBuffer();
    const { cid } = await ipfs.add(pdfFile, { pin: true });
   // setIpfsImageHash(cid.toString());
    setIpfsPdfCid(cid.toString());
  };

  return (
	  <Col>
  <Row>
    <Col>
      <label htmlFor="pdf-btn" 
	  className="btn btn-primary"
            className={`btn ${enabledButton ? 'btn-primary' : 'btn-secondary'}`}

	  >
        Upload PDF
        <input
          type="file"
          name="pdfFile" // This should be different from imageFile to handle PDFs
          id="pdf-btn"
          onChange={onChangePdf} // Assuming you have a separate handler for PDF
          accept="application/pdf"
          style={{ display: 'none' }} // To hide the input but show the label
              disabled={!enabledButton} // Disable input when button not enabled
	  />
      </label>
    </Col>
    <Col>
      <Button variant="primary" 
	  onClick={loadIpfsPdf}
              disabled={!enabledButton} // Disable input when button not enabled
	  > {/* Assuming a separate function for PDF */}
        Register PDF
      </Button>
    </Col>
  </Row>
</Col>

  );
}

export default LoadPdfIpfsCid;
