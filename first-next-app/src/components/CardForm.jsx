"use client"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CardForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    // Create card HTML
    const newCard = (
      <div className="card" key={cards.length}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <br />
          <p className="card-date">{date}</p>
          <br />
          <p className="card-text">{description}</p>
          <hr />
        </div>
      </div>
    );

    // Update state
    setCards([...cards, newCard]);
    setTitle('');
    setDate('');
    setDescription('');
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Form
      </Button>

      <div id="cardContainer">
        {cards}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Card Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardForm;