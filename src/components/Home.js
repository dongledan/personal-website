import React, { Component } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import BlogPhotos from "./BlogPhotos";
import "./Loading.css";
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="home">
        <Navbar />
        <div className="homeContent">
          <Title />
          <About />
          <Projects />
          <BlogPhotos />
          <Footer />
        </div>
      </div>
    );
  }
}
