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

  const imgs = [
    {
      id: 1,
      src: "https://i.imgur.com/FBKuSsX.jpg", 
      caption: "Programmer", 
      alt:"First slide"
    }, 
    {
      id: 2,
      src: "https://i.imgur.com/Kij6xVe.png", 
      caption: "Powerlifter", 
      alt:"Second slide"
    }, 
    {
      id: 3,
      src: "https://i.imgur.com/qthifkc.jpg", 
      caption: "Hiker", 
      alt:"Third slide"
    }, 
    {
      id: 4,
      src: "https://i.imgur.com/ERH5VG2.jpg", 
      caption: "Spartan", 
      alt:"Fourth slide"
    }
  ]

  return (
  <div id='about' class='about'>
    <h1 class='about-header'  data-aos='fade'>About Me</h1>
    <div class='container row mx-auto'>
      
      <Carousel interval='8000' class='mt-1 col-6' fade='true'>
      {imgs.map(img => (
        <Carousel.Item key={img.key}>
          <Image
            className="img"
            src={img.src}
            alt={img.alt}
            fluid
            key={img.key}
          />
            <Carousel.Caption>
              <h3 className='h3'>{img.caption}</h3>
            </Carousel.Caption>
      </Carousel.Item>

      ))}
        
      </Carousel>
      <div className='col-lg-6 about-right p-content' >
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
        <p> Singing, Dancing, Powerlifting</p>
      </div>
      </div>
      <div>
        <a 
          href={pdf} 
          target='_blank' 
          rel='noopener noreferrer'
          >
          <div class="btn btn-resume">
            <ion-icon name="download" id='ion-resume'/>
              {'   '}
            <span>Resume</span>
          </div>
          </a>
      </div>
  </div>
  )
}
