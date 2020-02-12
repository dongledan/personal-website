import React, { Component } from "react";
import "./Footer.css";
import socials from "./variables/footer";

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
        <div className={`social ${this.props.theme}`} id="contact">
          {socials.map(social => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={social.id}
            >
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </div>
        <div className={`copyright ${this.props.theme}`}>
          <p className="p-copyright">
            {" "}
            &copy; {year} Danny Li. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
