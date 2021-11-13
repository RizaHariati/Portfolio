import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { projects } from "./data";
const imageAddress = "/assets/images/";

const Navbar = () => {
  const {
    refHome,
    refAbout,
    refProject,
    homeOn,
    aboutOn,
    projectOn,
    projectMenu,
    setProjectMenu,
  } = useGlobalContext();
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <nav className="navbar-container">
      <h2>
        Azri <span>Coding</span>
      </h2>

      <div className="pages">
        <Link to="/" className="page" onClick={homeOn}>
          <h3 ref={refHome}>home</h3>
        </Link>
        <button
          className="page"
          onClick={projectOn}
          onMouseLeave={() => setProjectMenu(false)}
        >
          <h3 ref={refProject}>project</h3>
          {projectMenu && (
            <div className="subpage">
              {projects.map((project) => {
                const { id, title } = project;
                return (
                  <Link to={`/project/${id}`} key={id}>
                    <p>{title}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </button>
        <Link to="/about" className="page" onClick={aboutOn}>
          <h3 ref={refAbout}>about</h3>
        </Link>
      </div>
      <div className="socials">
        <div className="social">
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
          <button
            className="menu-btn"
            onClick={() => setShowSubmenu(!showSubmenu)}
          >
            <img src={`${imageAddress}menu.svg`} alt="github" />
          </button>
        </div>

        <div className="power">
          <p>powered by ReactJS</p>
        </div>
      </div>
      {showSubmenu && <Submenu />}
    </nav>
  );
};

export default Navbar;

const Submenu = () => {
  return (
    <div className="submenu-container">
      <Link to="/" className="submenu-link">
        <h3>home</h3>
      </Link>
      <div className="submenu-link">
        <h3>project</h3>
        <div className="submenu-sublink">
          {projects.map((project) => {
            const { id, title } = project;
            return (
              <Link to={`/project/${id}`} key={id}>
                <p>{title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Link to="/about" className="submenu-link">
        <h3>about</h3>
      </Link>
    </div>
  );
};
