import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import FunctionForm from '../functionForm/FunctionForm';

const MovieItem = ({ id, title, director, description, imageUrl }) => {
  const [showModal, setShowModal] = useState(false);
  const [movieShows, setMovieShows] = useState([]);

  const fetchShows = async () => {
    console.log("Renderizando en MovieItem");
    console.log(`el id es: ${id}`)
    try {
      const response = await fetch(`https://localhost:7183/api/Show/GetShowsByMovieId/${id}`);
      const showsData = await response.json();
      setMovieShows(showsData);
      console.log(showsData);
    } catch (error) {
      console.log("Error al solicitar las funciones a la base de datos:", error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
    fetchShows();
  };
  const handleCloseModal = () => setShowModal(false);

  /*const functions = [
    { id: 1, name: 'Función 1' },
    { id: 2, name: 'Función 2' },
    { id: 3, name: 'Función 3' },
  ];*/

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
          onClick={handleShowModal}
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

      <FunctionForm show={showModal} handleClose={handleCloseModal} functions={movieShows} />
    </Card>
  );
};

export default MovieItem;
