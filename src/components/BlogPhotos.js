import React, { Component } from 'react';
import arizona from './photos/arizona.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './BlogPhotos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class BlogPhotos extends Component {
  render() {
    return (
      <div id='photos'>
        <h1 data-aos='fade-up'>Photography</h1>
        <div class='photos container'>
          {arizona.map(image => (
            <div class='block'>
              <img src={image} className='images' data-aos='fade'/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
