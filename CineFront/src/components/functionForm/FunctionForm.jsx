import React, { useState } from "react";
import { Button, Modal, ListGroup, Form } from "react-bootstrap";

const FunctionForm = ({
  show,
  handleClose,
  functions,
  movieId,
  movieTitle,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFunction, setNewFunction] = useState({
    date: "",
    startTime: "",
    price: "",
  });
  const [editingFunction, setEditingFunction] = useState(null);
  const [editingDetails, setEditingDetails] = useState({
    date: "",
    startTime: "",
    price: "",
  });

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
    width: "100%",
  };

  const editButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: "green",
  };

  const deleteButtonStyle = {
    ...commonButtonStyle,
    backgroundColor: "red",
  };

  const labelStyle = {
    color: "#E0E0E0",
    marginBottom: "0.5rem",
  };

  const inputStyle = {
    backgroundColor: "#333",
    color: "white",
    border: "1px solid #555",
    marginBottom: "1rem",
  };

  const modalContentStyle = {
    backgroundColor: "#1c1c1c",
    color: "white",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleAddFunction = async () => {
    // this combines date and time into one string and convert to UTC
    const dateTime = new Date(`${newFunction.date}T${newFunction.startTime}Z`);
    const isoDate = dateTime.toISOString();

    const addShowArray = {
      date: isoDate,
      price: newFunction.price,
      movieId: movieId,
    };

    try {
      const response = await fetch("https://localhost:7183/api/Show/AddShow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addShowArray),
      });

      if (response.ok) {
        console.log("Función creada:", addShowArray);
        alert("La función se ha creado con éxito");
      } else {
        alert("No se ha podido crear la función");
        throw new Error("The response has some errors");
      }
    } catch (error) {
      console.log(error);
    }

    setNewFunction({ date: "", startTime: "", price: "" });
    setShowAddForm(false);
    handleClose();
  };

  const handleEditFunction = async () => {
    const dateTime = new Date(`${editingDetails.date}T${editingDetails.startTime}Z`);
    const isoDate = dateTime.toISOString();

    const editShowArray = {
      date: isoDate,
      price: editingDetails.price,
    };

    try {
      const response = await fetch(`https://localhost:7183/api/Show/ModifyShow/${editingFunction}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editShowArray),
      });

      if (response.ok) {
        console.log("Función editada:", editShowArray);
        alert("Los datos de la función se editaron con éxito");
      } else {
        alert("No se ha podido editar los datos correctamente");
        throw new Error("The response has some errors");
      }
    } catch (error) {
      console.log(error);
    }

    setEditingDetails({ date: "", startTime: "", price: "" });
    setEditingFunction(null);
    handleClose();
  };

  const handleEditClick = (func) => {
    setEditingFunction(func.id);
    setEditingDetails({
      date: func.date.slice(0, 10), // YYYY-MM-DD
      startTime: func.date.slice(11, 16), // HH:MM
      price: func.price,
    });
  };

  const handleCancelEdit = () => {
    setEditingFunction(null);
    setEditingDetails({ date: "", startTime: "", price: "" });
  };

  const handleDeleteShow = async (showId) => {
    try {
      const response = await fetch(`https://localhost:7183/api/Show/DeleteShow/${showId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Función eliminada");
        alert("La función se ha eliminado con éxito");
      } else {
        alert("No se ha podido eliminar la función");
        throw new Error("The response has some errors");
      }
    } catch (error) {
      console.log(error);
    }

    handleClose();
  };

  const sortedFunctions = [...functions].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton style={modalContentStyle}>
          <Modal.Title>{`Funciones Disponibles para ${movieTitle}`}</Modal.Title>
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
            {sortedFunctions.map((func) => (
              <ListGroup.Item
                key={func.id}
                className="mb-3"
                style={{ backgroundColor: "#2c2c2c", color: "#E0E0E0" }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    {`Fecha: ${formatDate(func.date)}, Hora: ${formatTime(func.date)}, Precio: $${func.price}`}
                  </div>
                  <div className="d-flex align-items-center">
                    {editingFunction === func.id ? (
                      <>
                        <Button
                          style={commonButtonStyle}
                          className="me-2"
                          onClick={handleEditFunction}
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
                        <Button
                          style={deleteButtonStyle}
                          onClick={() => handleDeleteShow(func.id)}
                        >
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
                          onChange={(e) =>
                            setEditingDetails({
                              ...editingDetails,
                              date: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </Form.Group>
                      <Form.Group controlId="editFunctionTime">
                        <Form.Label style={labelStyle}>Hora</Form.Label>
                        <Form.Control
                          type="time"
                          value={editingDetails.startTime}
                          onChange={(e) =>
                            setEditingDetails({
                              ...editingDetails,
                              startTime: e.target.value,
                            })
                          }
                          style={inputStyle}
                        />
                      </Form.Group>
                      <Form.Group controlId="editFunctionPrice">
                        <Form.Label style={labelStyle}>Precio</Form.Label>
                        <Form.Control
                          type="number"
                          value={editingDetails.price}
                          onChange={(e) =>
                            setEditingDetails({
                              ...editingDetails,
                              price: e.target.value,
                            })
                          }
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

      <Modal
        show={showAddForm}
        onHide={() => setShowAddForm(false)}
        className="modal-lg"
      >
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
                onChange={(e) =>
                  setNewFunction({ ...newFunction, date: e.target.value })
                }
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group controlId="functionTime">
              <Form.Label style={labelStyle}>Hora</Form.Label>
              <Form.Control
                type="time"
                value={newFunction.startTime}
                onChange={(e) =>
                  setNewFunction({
                    ...newFunction,
                    startTime: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </Form.Group>
            <Form.Group controlId="functionPrice">
              <Form.Label style={labelStyle}>Precio</Form.Label>
              <Form.Control
                type="number"
                value={newFunction.price}
                onChange={(e) =>
                  setNewFunction({
                    ...newFunction,
                    price: e.target.value,
                  })
                }
                style={inputStyle}
              />
            </Form.Group>
            <Button
              style={addButtonStyle}
              className="mt-3"
              onClick={handleAddFunction}
            >
              Agregar Función
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FunctionForm;
