import React from 'react';
import './Title.css';
import Image from 'react-bootstrap/Image';

export default function Title() {
  return (
    <div class='home'>
      <Image src='https://i.imgur.com/sJH7vkz.jpg' fluid data-aos='fade-down'/>
      <div class='container-header'>
        <h3 class='lead header-text'>Welcome to my site!</h3>
        <h3 class='lead header-text-2'>Danny Li</h3>
        <hr class='line'></hr>
        <h3 class='lead header-text-3'>Software Engineer</h3>
        <a href='#about'>
          <ion-icon name="arrow-down" class='arrow slideDown' />
        </a>
      </div>
    </div>
  )
}
