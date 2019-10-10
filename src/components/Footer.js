import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
    <div className="Footer w-100 mt-6 mb-6">
      <div className="row m-auto">
        <div className="col-3 w-75">
          <h5>General</h5>
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="#about"> 
            <p>About </p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href='#blog'>
            <p>Blog</p>
          </a>
          <a href='mailto:dli0906@gmail.com'>
            <p>Contact</p>
          </a>
        </div>
        <div className="col-3 w-75">
          <h5>Connect</h5>
          <a href="https://github.com/dongledan" target="_blank">
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/d-li//" target="_blank">
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="col-3 w-75">
          <h5>Social</h5>
          <a href="https://www.instagram.com/dli.ft/" target="_blank">
            <p>Instagram</p>
          </a>
          <a href="https://www.facebook.com/dongledan" target="_blank">
            <p>Facebook</p>
          </a>
          <a href="https://goo.gl/maps/33VPxoNA4vQpqLQD9" target="_blank">
            <p>Google Reviews</p>
          </a>
        </div>
        <div className='col-3'>
          <a href='#home'>
            <ion-icon name="arrow-up" size='large' />
          </a>
        </div>
      </div>
    </div>
    )
  }
}