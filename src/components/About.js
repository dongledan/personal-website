import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import linkedIn from '../assets/linkedIn.JPG';
import powerlifting from '../assets/powerlifting.png';
import hiking from '../assets/hiking.jpeg';
import spartan from '../assets/spartan.JPG';
import './About.css';
import pdf from './Documents/Danny_Li_Resume.pdf';
import Button from 'react-bootstrap/Button';

export default function About() {
  return (
  <div id='about' class='about'>
    <h1 class='about-header'>About Me</h1>
    <div class='container row mx-auto'>
      <Carousel interval='10000' class='mt-1 col-6' fade='true'>
        <Carousel.Item>
          <img
            className="img"
            src={linkedIn}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='h3'>Programmer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src={powerlifting}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='h3'>Powerlifter</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src={hiking}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='h3'>Hiker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src={spartan}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3 className='h3'>Spartan</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div class='col-lg-6 about-right'>
        <p>I studied accounting and economics in Queens College 
          and interned for a subsidiary of the IRS while 
          I was working towards my CPA. Although I liked 
          interacting with clients and my colleagues, I felt 
          there was something missing. I was always interested 
          in software engineering, but taking a Bootcamp Prep course 
          through Fullstack Academy ignited my love for coding. I 
          enjoy solving problems, debugging code, and applying 
          knowledge to build tools. In the future, I hope to work 
          for a mission-driven organization as a software engineer.
        </p>
        <p>When I am not debugging, you can find me at the gym or the 
          outdoors getting into who knows what.
        </p>
        <h5>Proficient: </h5>
        <p>Javascript, Node.js, Express.js, React.js, 
        Redux.js, Sequelize, Axios, Git, HTML, CSS, PostgreSQL, Bootstrap
        </p>
        <h5>Familiar:</h5>
        <p> Material UI, Figma, Webpack, Mocha, Chai, Jasmine, 
        Phaser, Firebase, Google Vision</p>
        <h5>Mediocre:</h5>
        <p> Singing, Dancing, Powerlifting</p>
        <Button
          variant="dark"
          id="resume-btn"
          className="mt-5"
          // href={pdf}
          target="_blank"
          size='md'
          >
          <ion-icon name="download"/>
            {'   '}
          <p>Resume</p>
        </Button>
      </div>
      </div>
  </div>
  )
}
