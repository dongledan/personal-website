import React from "react";
import "./Title.css";
import Image from "react-bootstrap/Image";

export default function Title() {
  return (
    <div className="home header-img">
      <div className="container-header">
        <h3 className="lead header-text">Welcome to my site!</h3>
        <h3 className="lead header-text-2">Danny Li</h3>
        <hr className="line"></hr>
        <h3 className="lead header-text-3 anim-typewriter">Software Engineer :)</h3>
        <a href="#about" className="a">
          <svg className="circle">
            <g>
              <ellipse
                className="background"
                ry="30"
                rx="30"
                cy="31.25"
                cx="31.25"
                strokeWidth="1"
              />
              <ellipse
                className="foreground"
                ry="30"
                rx="30"
                cy="31.25"
                cx="31.25"
                strokeWidth="2"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
