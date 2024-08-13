import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import showcaseImage from './showcase.png';

const NavBar = () => {
  const navbarStyle = {
    backgroundColor: "#262140", 
    border: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: "0",
    textTransform: "uppercase",
    marginBottom: "30px", 
  };

  const navLinkStyle = {
    color: 'white',
    marginRight: '20px' 
  };

  return (
    <Navbar style={navbarStyle} expand="lg" variant="dark">
      <Navbar.Brand href="#">
        <img
          src={showcaseImage}
          alt="Showcase"
          width="350"
          height="45"
          className="d-inline-block align-top"
          
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
          <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
          <Nav.Link href="#about" style={navLinkStyle}>About</Nav.Link>
          <Nav.Link href="#contact" style={navLinkStyle }>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
