import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#262140", 
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    padding: "20px",
    textAlign: "center",
    left: "0",
    bottom: "0",
    width: "100%",
    marginTop: "20px"
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Showcase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
