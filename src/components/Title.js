import React from 'react';
import './Title.css';
import Image from 'react-bootstrap/Image';

export default function Title() {
  return (
    <div class='home'>
      <Image src='https://i.imgur.com/sJH7vkz.jpg' fluid data-aos='fade-down' class='image' />
      <div class='container-header'>
        <h3 class='lead header-text'>Welcome to my site!</h3>
        <h3 class='lead header-text-2'>Danny Li</h3>
        <hr class='line'></hr>
        <h3 class='lead header-text-3 anim-typewriter'>Software Engineer :)</h3>
        <a href='#about' class='a'>
          <svg class="circle">
            <g>
              <ellipse class="background" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="1"/>
              <ellipse class="foreground" ry="30" rx="30" cy="31.25" cx="31.25" stroke-width="2"/>
            </g>
          </svg>
        </a>
      </div>
    </div>
  )
}
