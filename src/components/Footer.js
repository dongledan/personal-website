import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
    <div className="Footer w-100 mt-6 mb-6" id='footer'>
      <div className="row m-auto" >
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
          <a href='#photos'>
            <p>Photos</p>
          </a>
          <a href='mailto:dli0906@gmail.com'>
            <p>Contact</p>
          </a>
        </div>
        <div className="col-3 w-75">
          <h5>Connect</h5>
          <a 
            href="https://github.com/dongledan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a 
            href="https://www.linkedin.com/in/d-li/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="col-3 w-75">
          <h5>Social</h5>
          <a 
            href="https://www.instagram.com/dli.ft/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Instagram</p>
          </a>
          <a 
            href="https://www.facebook.com/dongledan" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Facebook</p>
          </a>
          <a 
            href="https://goo.gl/maps/33VPxoNA4vQpqLQD9" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Google Reviews</p>
          </a>
        </div>
        <div className='col-3'>
          <a href='#home' class='b'>
            <svg class="circle">
              <g>
                <ellipse class="background" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="1"/>
                <ellipse class="foreground" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="2"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className='copyright'>
        <p> Copyright © 2019 Danny Li. I'd hire me</p>
      </div>
    </div>
    )
  }
}
