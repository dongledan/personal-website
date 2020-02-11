import React, { Component } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import BlogPhotos from "./BlogPhotos";
export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Navbar />
        <div>
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
