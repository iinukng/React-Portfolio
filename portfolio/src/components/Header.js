import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Justin Kang</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link as={ Link } to='/'>Home</Nav.Link>
          <Nav.Link as={ Link } to="/portfolio"> Portfolio </Nav.Link>
          <Nav.Link as={ Link } to="/contact"> Contact </Nav.Link>
          <Nav.Link as={ Link } to="/resume"> Resume </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}

export default Header;

