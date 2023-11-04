import React, { useContext, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { create } from 'ipfs-http-client';
import { WalletContext } from '../lib/WalletContext';

function LoadPdfIpfsCid() {
  const [productImage, setProductImage] = useState(null);
  const { ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid,ipfsPdfCid, setIpfsPdfCid } = useContext(WalletContext);


	const [ipfsImageUrl, setIpfsImageUrl] = useState(null);

  const onChangeImage = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleViewIpfs = (e) => {
	  e.preventDefault();
    if (ipfsImageHash) {
      setIpfsImageUrl(`https://ipfs.io/ipfs/${ipfsImageHash}`);
    }
  };

  const loadIpfsImage = async () => {
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
    const imageFile = await productImage.arrayBuffer();
    const { cid } = await ipfs.add(imageFile, { pin: true });
    setIpfsImageHash(cid.toString());
    setIpfsPdfCid(cid.toString());
  };

  return (
	  <Col>
  <Row>
    <Col>
      <label htmlFor="pdf-btn" className="btn btn-primary">
        Upload PDF
        <input
          type="file"
          name="pdfFile" // This should be different from imageFile to handle PDFs
          id="pdf-btn"
          onChange={onChangeImage} // Assuming you have a separate handler for PDF
          accept="application/pdf"
          style={{ display: 'none' }} // To hide the input but show the label
        />
      </label>
    </Col>
    <Col>
      <Button variant="primary" onClick={loadIpfsImage}> {/* Assuming a separate function for PDF */}
        Save PDF
      </Button>
    </Col>
  </Row>
</Col>

  );
}

export default LoadPdfIpfsCid;
