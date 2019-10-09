import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linkedIn from '../assets/linkedIn.JPG';
import powerlifting from '../assets/powerlifting.png';
import hiking from '../assets/hiking.jpeg';
import spartan from '../assets/spartan.JPG';
import newYork from '../assets/new-york.jpg';
import './styles.css';

export default function About() {
  return (
  <div id='about' class='about'>
    <h1>About Me</h1>
    <Carousel interval='10000'>
      <Carousel.Item>
        <img
          className="img"
          src={linkedIn}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fullstack Software Engineer</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={powerlifting}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Powerlifter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={newYork}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Avid Hiker</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={spartan}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Spartan</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>


  )
}
