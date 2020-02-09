import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        <div className="footer">
          <div className='legal'>
            <p> &copy; {year} Danny Li. All rights reserved.</p>
          </div>
        </div>
      </div>
   
    )
  }
}
