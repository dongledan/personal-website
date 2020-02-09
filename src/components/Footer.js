import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }

    return (
      <div className="footer">
        <button className="scroll-up" onClick={() => scrollToTop()}>
          ^
        </button>
        <div className="social" id="contact">
          <a
            href="https://github.com/dongledan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/d-li/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/linkedin.png" />
          </a>
          <a
            href="https://www.instagram.com/hike4views/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/ig.png" />
          </a>
        </div>
        <div className="copyright">
          <p className="p-copyright">
            {" "}
            &copy; {year} Danny Li. All rights reserved
          </p>
        </div>
      </div>
    );
  }
}
