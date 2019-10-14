import React, { Component } from 'react';
import images from './photos/images.js';
import './BlogPhotos.css';

export default class BlogPhotos extends Component {
  render() {
    return (
      <div id='photos'>
        <h1 data-aos='fade'>Photography</h1>
        <div class='photos container'>
          {images.map(image => (
            <div class='photo'>
              <img src={image} className='images' data-aos='fade' alt='pictures of my travels taken on my iPhone'/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
