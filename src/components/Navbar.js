import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

export default class myNavbar extends Component {
  render() {
  return (
    <Navbar className={`my-navbar ${this.props.theme} navbar-${this.props.theme}`} expand="lg" fixed="top">
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
          <Nav.Link href="#home" className={`nav-link ${this.props.theme}`}>Home</Nav.Link>
          <Nav.Link href="#about" className={`nav-link ${this.props.theme}`}>About</Nav.Link>
          <Nav.Link href="#projects" className={`nav-link ${this.props.theme}`}>Projects</Nav.Link>
          <Nav.Link href="#photos" className={`nav-link ${this.props.theme}`}>Photos</Nav.Link>
          {/* <NavDropdown title='Blog' id='basic-nav-dropdown'>
            <NavDropdown.Item>Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#photos'>Photos</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="#contact" className={`nav-link ${this.props.theme}`}>Contact</Nav.Link>
          <Nav.Link></Nav.Link>
          <button type="button" onClick={this.props.toggleTheme}>Toggle</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
}
