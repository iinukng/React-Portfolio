import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import img2 from '../assets/pdf.png'

export const Resume = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <br />
    <Card className="position-absolute top-50 start-50 translate-middle" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text>
          Download the PDF using the button below 
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Download
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Coming Soon </Modal.Title>
        </Modal.Header>
        <Modal.Body>Oops! I currently do not have an updated version of my resume, still in the works.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>
    </Card>
    </div>
  )
}

