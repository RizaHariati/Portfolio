import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
const imageAddress = "/assets/images/";

const Navbar = () => {
  const { refHome, refAbout, homeOn, aboutOn } = useGlobalContext();

  return (
    <nav className="navbar-container">
      <h2>
        Azri <span>Coding</span>
      </h2>

      <div className="pages">
        <Link to="/" className="page" onClick={homeOn}>
          <h3 ref={refHome}>home</h3>
        </Link>

        <Link to="/about" className="page" onClick={aboutOn}>
          <h3 ref={refAbout}>about</h3>
        </Link>
      </div>
      <div className="socials">
        <a className="social-btn" href="https://github.com/RizaHariati">
          <img src={`${imageAddress}github.svg`} alt="github" />
        </a>
        <a
          className="social-btn"
          href="https://www.instagram.com/rizahariati/?hl=en"
        >
          <img src={`${imageAddress}instagram.svg`} alt="instagram" />
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/riza-hariati-2021/"
        >
          <img src={`${imageAddress}linkedin.svg`} alt="linkedin" />
        </a>

        <div className="power">
          <p>powered by ReactJS</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
