import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "./context";

const About = () => {
  const { projectOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY < 0) {
      history.push("/project/azri001");
      projectOn();
    }
  };
  return (
    <div
      className="about-container"
      onWheel={(e) => {
        handlewheel(e);
      }}
    >
      <h1>About</h1>
      <div className="line"></div>
      <div className="about-container-header">
        <img src="/assets/images/MyPhoto.jpg" alt="Riza" />
        <h4 className="text">
          It was June 2020 when I first decided that I'm going to start learning
          to code and this website is dedicated to show you what I've learned so
          far.
        </h4>
      </div>
      <div className="line"></div>
      <div className="tools">
        <div className="tool-list">
          <h2 className="tool-title">Development Tools</h2>
          <div className="tool">
            <h4 className="tool-text">Javascript/Css/Html</h4>
            <h4 className="tool-text">ReactJS</h4>
            <h4 className="tool-text">Nodejs</h4>
            <h4 className="tool-text">Express</h4>
            <h4 className="tool-text">PHP</h4>
            <h4 className="tool-text">Java</h4>
            <h4 className="tool-text">NetBeans</h4>
            <h4 className="tool-text">Axios</h4>
            <h4 className="tool-text">JQuery</h4>
          </div>
        </div>
        <div className="tool-list">
          <h2 className="tool-title">Design</h2>
          <div className="tool">
            <h4 className="tool-text">Photoshop</h4>
            <h4 className="tool-text">Sketchup</h4>
            <h4 className="tool-text">3dsMax</h4>
            <h4 className="tool-text">AutoCAD</h4>
          </div>
        </div>
      </div>
      <div className="s-about">
        <a className="social-btn" href="https://github.com/RizaHariati">
          <i className="fa fa-github-square"></i>
        </a>
        <a
          className="social-btn"
          href="https://www.instagram.com/rizahariati/?hl=en"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/riza-hariati-2021/"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
