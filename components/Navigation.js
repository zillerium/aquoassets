import React, { useState, useContext } from "react";
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { WalletContext } from "../lib/WalletContext";

const Navigation = () => {
const { userAddress, setUserAddress } = useContext(WalletContext);
  const changeSkin = (colorScheme) => {
    document.body.className = colorScheme;
  };

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/" passHref>Home</Nav.Link>
          <NavDropdown title="Assets" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/AssetPage" passHref>Read Assets in a Contract</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/TransferAssetPage" passHref>Transfer Asset</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/ShowAllAssetsPage" passHref>Show All Assets for a Contract</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/LoadIpfsPage" passHref>Load Investment Prospectus</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="All Assets" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/AddContractPage" passHref>Add New Contract</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/ShowAllContractsPage" passHref>Show All Contracts</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Change Skin" id="skin-nav-dropdown">
            <NavDropdown.Item onClick={() => changeSkin('skin-blue')}>Blue Screen</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeSkin('skin-black')}>Black Screen</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeSkin('skin-white')}>White Screen</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

