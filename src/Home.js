import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useGlobalContext } from "./context";
const imageAddress = "/assets/images/";
const Home = () => {
  const { projectOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY > 0) {
      history.push("/project/azri001");
      projectOn();
    }
  };
  return (
    <div
      className="home-container"
      onWheel={(e) => {
        handlewheel(e);
      }}
    >
      <Profile />
      <Projects />
    </div>
  );
};

export default Home;

const Profile = () => {
  return (
    <div className="myprofile-container">
      <img src={`${imageAddress}Myphoto.jpg`} alt="myimage" />
      <h1>Hi! I'm Riza Hariati</h1>
      <h3>Welcome to my page</h3>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="myprojects-container">
      <h3>Here are some of my projects : </h3>
      <div className="myprojects">
        <div className="project-link">
          <a
            href="https://rsuripsumoharjo-mockup.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link-btn">
              <img src={`${imageAddress}Web1.jpg`} alt="Web1" />
              <h3>Go to page...</h3>
            </div>
          </a>

          <div className="project-link-link">
            <Link to="/project/azri001">
              <p>
                RS. Urip Sumoharjo - mock-up <br /> learn more...
              </p>
            </Link>
          </div>
        </div>

        <div className="project-link">
          <a
            href="https://azribook.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link-btn">
              <img src={`${imageAddress}Web2.jpg`} alt="Web2" />
              <h3>Go to page...</h3>
            </div>
          </a>

          <div className="project-link-link">
            <Link to="/project/azri002">
              <p>
                Azribook -study on Facebook <br /> learn more...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
