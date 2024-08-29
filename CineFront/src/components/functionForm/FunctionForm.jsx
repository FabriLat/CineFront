import React, { useState } from 'react';
import { Button, Modal, ListGroup, Form } from 'react-bootstrap';

const FunctionForm = ({ show, handleClose, functions, movieId }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFunction, setNewFunction] = useState({ date: '', startTime: '', price: '', movieId: '' });
  const [editingFunction, setEditingFunction] = useState(null);
  const [editingDetails, setEditingDetails] = useState({ date: '', startTime: '', price: '' });

  const commonButtonStyle = {
    border: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: "0",
    textTransform: "uppercase",
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
    backgroundColor: "red"
  };

  const labelStyle = {
    color: "#E0E0E0", 
    marginBottom: "0.5rem"
  };

  const inputStyle = {
    backgroundColor: "#333",
    color: "white", 
    border: "1px solid #555",
    marginBottom: "1rem"
  };

  const modalContentStyle = {
    backgroundColor: "#1c1c1c",
    color: "white"
  };

  const handleAddFunction = async (movieId) => {
    
    const subStringArray = newFunction.date.split("-")
    //console.log(subStringArray);
    const addShowArray = {
      "sartTime": newFunction.startTime,
      "date": `${subStringArray[2]}/${subStringArray[1]}/${subStringArray[0]}`,
      "price": newFunction.price,
      "movieId": movieId
    };

    await fetch("https://localhost:7183/api/Show/AddShow", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(addShowArray)
    })
      .then((response) => {
          if (response.ok) {
            console.log("Función creada:", addShowArray);
            alert("La función se ha creado con éxito");
          } else {
              alert("No se ha podido crear la función");
              throw new Error("The response has some errors");
          }
      })
      .catch((error) => console.log(error))

    setShowAddForm(false);
    handleClose();
  };

  const handleEditFunction = async (showId) => {

    const subStringArray = editingDetails.date.split("-")
    //console.log(subStringArray);
    const editShowArray = {
      "sartTime": editingDetails.startTime,
      "date": `${subStringArray[2]}/${subStringArray[1]}/${subStringArray[0]}`,
      "price": editingDetails.price
    }

    await fetch(`https://localhost:7183/api/Show/ModifyShow/${showId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(editShowArray)
    })
      .then((response) => {
          if (response.ok) {
            console.log("Función editada:", editShowArray);
            alert("Los datos de la función se editaron con éxito");
          } else {
              alert("No se ha podido editar los datos correctamente");
              throw new Error("The response has some errors");
          }
      })
      .catch((error) => console.log(error))

    setEditingFunction(null);
    handleClose();
  };

  const handleEditClick = (func) => {
    setEditingFunction(func.id);
    setEditingDetails({ date: func.date, startTime: func.startTime, price: func.price });
  };

  const handleCancelEdit = () => {
    setEditingFunction(null);
    setEditingDetails({ date: '', startTime: '', price: '' });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton style={modalContentStyle}>
          <Modal.Title>Funciones Disponibles</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalContentStyle}>
          <Button
            style={addButtonStyle}
            className="mb-3"
            onClick={() => setShowAddForm(true)}
          >
            Agregar Nueva Función
          </Button>
          <ListGroup>
            {functions.map((func) => (
              <ListGroup.Item key={func.id} className="mb-3" style={{ backgroundColor: "#2c2c2c", color: "#E0E0E0" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    {`Fecha: ${func.date}, hora: ${func.startTime}, precio: $${func.price}`}
                  </div>
                  <div className="d-flex align-items-center">
                    {editingFunction === func.id ? (
                      <>
                        <Button
                          style={commonButtonStyle}
                          className="me-2"
                          onClick={() => handleEditFunction(func.id)}
                        >
                          Guardar Cambios
                        </Button>
                        <Button
                          style={commonButtonStyle}
                          onClick={handleCancelEdit}
                        >
                          Cancelar
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          style={editButtonStyle} 
                          className="me-2"
                          onClick={() => handleEditClick(func)}
                        >
                          Editar
                        </Button>
                        <Button style={deleteButtonStyle}>
                          Eliminar
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                {editingFunction === func.id && (
                  <div className="mt-3">
                    <Form>
                      <Form.Group controlId="editFunctionDate">
                        <Form.Label style={labelStyle}>Fecha</Form.Label>
                        <Form.Control
                          type="date"
                          value={editingDetails.date}
                          onChange={(e) => setEditingDetails({ ...editingDetails, date: e.target.value })}
                          style={inputStyle}
                        />
                      </Form.Group>
                      <Form.Group controlId="editFunctionTime">
                        <Form.Label style={labelStyle}>Hora</Form.Label>
                        <Form.Control
                          type="time"
                          value={editingDetails.startTime}
                          onChange={(e) => setEditingDetails({ ...editingDetails, startTime: e.target.value })}
                          style={inputStyle}
                        />
                      </Form.Group>
                      <Form.Group controlId="editFunctionPrice">
                        <Form.Label style={labelStyle}>Precio</Form.Label>
                        <Form.Control
                          type="number"
                          value={editingDetails.price}
                          onChange={(e) => setEditingDetails({ ...editingDetails, price: e.target.value })}
                          style={inputStyle}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>

      <Modal show={showAddForm} onHide={() => setShowAddForm(false)} className="modal-lg">
        <Modal.Header closeButton style={modalContentStyle}>
          <Modal.Title>Agregar Nueva Función</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalContentStyle}>
          <Form>
            <Form.Group controlId="functionDate">
              <Form.Label style={labelStyle}>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={newFunction.date}
                onChange={(e) => setNewFunction({ ...newFunction, date: e.target.value })}
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group controlId="functionTime">
              <Form.Label style={labelStyle}>Hora</Form.Label>
              <Form.Control
                type="time"
                value={newFunction.startTime}
                onChange={(e) => setNewFunction({ ...newFunction, startTime: e.target.value })}
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group controlId="functionPrice">
              <Form.Label style={labelStyle}>Precio</Form.Label>
              <Form.Control
                type="number"
                value={newFunction.price}
                onChange={(e) => setNewFunction({ ...newFunction, price: e.target.value })}
                style={inputStyle}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={modalContentStyle}>
          <Button style={commonButtonStyle} onClick={() => handleAddFunction(movieId)}>
            Guardar
          </Button>
          <Button style={commonButtonStyle} onClick={() => setShowAddForm(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FunctionForm;
