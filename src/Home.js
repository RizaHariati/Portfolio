import React from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "./context";
const Home = () => {
  const { projectOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY > 0) {
      history.push("/projects");
      projectOn();
    }
  };
  return (
    <div
      className="home"
      onWheel={(e) => {
        handlewheel(e);
      }}
    >
      <div className="profile-picture">
        <img src="/assets/images/MyPhoto.jpg" alt="Riza" />
      </div>
      <h1>
        Hi, I'm Riza Hariati
        <br />
        Welcome to My page!
      </h1>
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

export default Home;
