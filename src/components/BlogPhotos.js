import React, { Component } from 'react';
import arizona from './photos/arizona.js';
import './BlogPhotos.css';

export default class BlogPhotos extends Component {
  render() {
    return (
      <div id='photos'>
        <h1 data-aos='fade'>Photography</h1>
        <div class='photos container'>
          {arizona.map(image => (
            <div class='block'>
              <img src={image} className='images' data-aos='fade' />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
