// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand href="#home">Gallery App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
          <Nav.Link href="#gallery">
            <FontAwesomeIcon icon={faImages} /> Gallery
          </Nav.Link>
          <Nav.Link href="#contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Nav.Link>
          <Nav.Link href="#about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
