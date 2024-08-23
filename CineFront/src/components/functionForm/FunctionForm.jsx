import React from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';

const FunctionForm = ({ show, handleClose, functions }) => {
  const commonButtonStyle = {
    border: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: "0",
    textTransform: "uppercase"
    
  };

  const addButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: "#262140", 
    width: "100%"
  };

  const editButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: "green" 
  };

  const deleteButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: "red" // 
  };

  return (
    <Modal show={show} onHide={handleClose} style={{width: "1500px"}}>
      <Modal.Header closeButton>
        <Modal.Title>Funciones Disponibles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button style={addButtonStyle} className="mb-3">
          Agregar Nueva Función
        </Button>
        <ListGroup>
          {functions.map((func) => (
            <ListGroup.Item key={func.id} className="d-flex justify-content-between align-items-center">
              {`Fecha: ${func.date} - ${func.startTime} - ${func.price}`}
              <div className="d-flex justify-content-between align-items-center">
                <Button style={editButtonStyle} className="me-2">
                  Editar
                </Button>
                <Button style={deleteButtonStyle}>
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default FunctionForm;
