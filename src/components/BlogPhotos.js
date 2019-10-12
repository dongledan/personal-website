import React, { Component } from 'react';
import arizona from './photos/arizona.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './BlogPhotos.css';

export default class BlogPhotos extends Component {
  render() {
    return (
      <div id='photos'>
        <h1>Photography</h1>
        <div class='photos container'>
          {arizona.map(image => (
            <div class='block'>
              <img src={image} className='images' />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
