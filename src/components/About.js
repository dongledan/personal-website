import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import pdf from './Documents/DannyLi_Resume.pdf';
import Button from 'react-bootstrap/Button';
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
    <div class='container row mx-auto' data-aos='fade-up-right'>
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
      <div class='col-lg-6 about-right' >
        <p data-aos='fade-up-left'>I studied accounting and economics in Queens College 
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
        <p data-aos='fade-up-left'>When I am not debugging, you can find me at the gym or the 
          outdoors getting into who knows what.
        </p>
        <h5 data-aos='fade-up-left'>Proficient: </h5>
        <p data-aos='fade-up-left'>Javascript, Node.js, Express.js, React.js, 
        Redux.js, Sequelize, Axios, Git, HTML, CSS, PostgreSQL, Bootstrap
        </p>
        <h5 data-aos='fade-up-left'>Familiar:</h5>
        <p data-aos='fade-up-left'> Material UI, Figma, Webpack, Mocha, Chai, Jasmine, 
        Phaser, Firebase, Google Vision</p>
        <h5 data-aos='fade-up-left'>Mediocre:</h5>
        <p data-aos='fade-up-left'> Singing, Dancing, Powerlifting</p>
      </div>
      </div>
      <div>
        <a 
          href={pdf} 
          target='_blank' 
          rel='noopener noreferrer'
          >
          <div class="btn btn-resume" data-aos='fade-up'>
            <ion-icon name="download" id='ion-resume'/>
              {'   '}
            <span>Resume</span>
          </div>
          </a>
      </div>
  </div>
  )
}
