import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

export default function Navagation() {
  return (
    <Navbar className="my-navbar navbar-dark" expand="lg" fixed="top">
      <a href="#home">
        <img
          src="https://i.imgur.com/nbAqVew.jpg"
          className="img-logo"
          alt="close up of my face in windows logo"
        />
      </a>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto menu">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#photos">Photos</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
