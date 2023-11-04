import React, { useContext, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { create } from 'ipfs-http-client';
import { WalletContext } from '../lib/WalletContext';

function LoadImageIpfsCid() {
  const [productImage, setProductImage] = useState(null);
  const { imageClientName, setImageClientName, pdfClientName, setPdfClientName,ipfsImageHash, setIpfsImageHash, ipfsImageCid, setIpfsImageCid,ipfsPdfCid, setIpfsPdfCid } = useContext(WalletContext);


	const [ipfsImageUrl, setIpfsImageUrl] = useState(null);

  const onChangeImage = (e) => {
    setProductImage(e.target.files[0]);
  setImageClientName(e.target.files[0].name); // Update imageClientName
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
    setIpfsImageCid(cid.toString());
  };

  return (
    <Col>
	  <Row>
      <Col>

<label htmlFor="image-btn" className="btn btn-primary">
Upload Image 
<input
    type="file"
    name="imageFile"
    id="image-btn"
    onChange={onChangeImage}
    accept="image/png, image/jpeg, image/jpg"
    style={{ display: 'none' }}
  />
</label>
	  </Col>
	  <Col >
	  <Button variant="primary" onClick={loadIpfsImage}>
          Save Image 
        </Button>
         </Col>
	  </Row>
    </Col>
  );
}

export default LoadImageIpfsCid;
