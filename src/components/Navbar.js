import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';


export default function Navagation() {
  return (
    <Navbar bg='white' expand='lg' fixed='top'>
      <Navbar.Brand href='#home' className='logo-name'>
        <ion-icon 
          name="business"
          size="large"
          class="logo"
        />
        _Danny Li</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className = 'justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#photos'>Photos</Nav.Link>
          {/* <NavDropdown title='Blog' id='basic-nav-dropdown'>
            <NavDropdown.Item>Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#photos'>Photos</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href='#footer'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
