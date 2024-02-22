import React, { useState, useContext } from "react";
import Link from 'next/link';
import { Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap';
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
          <Nav.Link as={Link} href="/" passHref>
	  <img src="/aquologo.png" alt="Logo" className="logo-img" />
	  </Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/" passHref>Home</Nav.Link>
          <NavDropdown title="Help" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/GettingStarted" passHref>Getting Started</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/Technical" passHref>Tokens</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/Derivatives" passHref>Derivatives</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Valuations" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/AddValuation" passHref>Add Valuation</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="RWA Contracts" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/ListAssetPage" passHref>List Contracts</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/AssetPage" passHref>Read Assets in a Contract</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/TransferAssetPage" passHref>Transfer Asset</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Prospectus Management" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/ShowAllProspectusesPage" passHref>Show All Prospectuses</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/ListAllProspectusesPage" passHref>List All Prospectuses</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/UploadAndAddPage" passHref>Upload and Add Prospectus</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

