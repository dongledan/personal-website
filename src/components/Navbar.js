import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';


export default function Navagation() {
  return (
    <Navbar class='mr-auto' bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Danny Li</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#blog'>Blog</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
