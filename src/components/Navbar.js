import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';


export default function Navagation() {
  return (
    <Navbar class='mr-auto' bg='white' expand='lg' fixed='top'>
      <Navbar.Brand href='#home'>
        <ion-icon 
          name="business"
          size="large"
          class="logo"
        />
        Danny Li</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className = 'justify-content-end'>
        <Nav>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <NavDropdown title='Blog' id='collasible-nav-dropdown'>
            <NavDropdown.Item>Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Photos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
