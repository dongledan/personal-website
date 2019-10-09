import React, { Component } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import About from './About';
import Projects from './Projects';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Navbar />
        <div className='homeContent'>
          <Title />
          <About />
        </div>
      </div>
    )
  }
}

