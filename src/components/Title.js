import React from "react";
import "./Title.css";

export default function Title() {
  return (
    <div className="home header-img">
      <div className="container-header">
        <h3 className="lead header-text">Welcome to my site!</h3>
        <h3 className="lead header-text-2">Danny Li</h3>
        <hr className="line"></hr>
        <h3 className="lead header-text-3 anim-typewriter">
          Software Engineer :)
        </h3>
        <a href="#about" className="a">
          <svg className="circle" />
        </a>
      </div>
    </div>
  );
}
