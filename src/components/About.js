import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import pdf from './Documents/DannyLi_Resume.pdf';
import Image from 'react-bootstrap/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  AOS.init({
    duration: 1300
  });
  return (
  <div id='about' class='about'>
    <h1 class='about-header' data-aos='fade'>About Me</h1>
    <div className='about-container' data-aos='fade'>
      <Carousel interval='8000' class='mt-1 col-6' fade='true'>
        <Carousel.Item>
          <Image
            className="img"
            src='https://i.imgur.com/FBKuSsX.jpg'
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <h3 className='h3'>Programmer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="img"
            src='https://i.imgur.com/Kij6xVe.png'
            alt="Second slide"
            fluid
          />

          <Carousel.Caption>
            <h3 className='h3'>Powerlifter</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="img"
            src='https://i.imgur.com/qthifkc.jpg'
            alt="Third slide"
            fluid
          />

          <Carousel.Caption>
            <h3 className='h3'>Hiker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="img"
            src='https://i.imgur.com/ERH5VG2.jpg'
            alt="Fourth slide"
            fluid
          />

          <Carousel.Caption>
            <h3 className='h3'>Spartan</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="p-content" data-aos='fade'>
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
        <h5>Proficient: </h5>
        <p>Javascript, Node.js, Express.js, React.js, 
        Redux.js, Sequelize, Axios, Git, HTML, CSS, PostgreSQL, Bootstrap
        </p>
        <h5>Familiar:</h5>
        <p> Material UI, Figma, Webpack, Mocha, Chai, Jasmine, 
        Phaser, Firebase, Google Vision</p>
        <h5>Mediocre:</h5>
        <p > Singing, Dancing, Powerlifting</p>
        <div className="btn-container">
        <a 
          href={pdf} 
          target='_blank' 
          rel='noopener noreferrer'
          >
          <div class="btn btn-resume" data-aos='fade'>
            <ion-icon name="download" id='ion-resume'/>
              {'   '}
            <span>Resume</span>
          </div>
          </a>
      </div>
      </div>

      </div>
  </div>
  )
}
