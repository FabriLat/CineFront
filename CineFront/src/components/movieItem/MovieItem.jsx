import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MovieItem = ({ id, title, director, description, imageUrl }) => {
  return (
    <Card 
      className="mx-3 mb-4" 
      style={{ 
        width: "22rem", 
        backgroundColor: "black", 
        borderColor: "white",
        color: "white" 
      }} 
      key={id}
    >
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl ?? "https://bit.ly/47NylZk"}
        style={{ borderColor: 'white' }}
      />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{title}</Card.Title>
        <Card.Subtitle className="mb-2" style={{ color: "white" }}>{director}</Card.Subtitle>
        <p style={{ color: "white", textAlign: "left" }}>{description}</p>
        <Button 
          style={{ 
            backgroundColor: "#262140",  
            border: "none",
            color: "white",
            width: "100%",
            fontWeight: "bold",
            fontSize: "1.2rem",
            borderRadius: "0",
            textTransform: "uppercase"
          }}
        >
          Ver
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
