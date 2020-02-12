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
        <Navbar theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
        <div>
          <Title theme={this.props.theme}/>
          <About theme={this.props.theme}/>
          <Projects theme={this.props.theme}/>
          <BlogPhotos theme={this.props.theme}/>
          <Footer theme={this.props.theme}/>
        </div>
      </div>
    );
  }
}
