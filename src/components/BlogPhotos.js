import React, { Component } from "react";
import images from "./variables/images.js";
import "./BlogPhotos.css";

export default class BlogPhotos extends Component {
  render() {
    return (
      <div id="photos">
        <h1 data-aos="fade">Photography</h1>
        <div className="photos container" data-aos="fade">
          {images.map((image, i) => (
            <div className="photo" key={i}>
              <img
                src={image}
                key={i}
                className="images"
                alt="pictures of my travels taken on my iPhone"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
