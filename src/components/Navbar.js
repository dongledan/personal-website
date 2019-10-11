import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
          <NavDropdown title='Blog' id='basic-nav-dropdown'>
            <NavDropdown.Item>Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to='blogphotos'>Photos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='mailto:dli0906@gmail.com' target='_blank'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
