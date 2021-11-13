import React, { useState, useEffect } from "react";
import { projects } from "./data";
import { useHistory, useParams } from "react-router";
import { useGlobalContext } from "./context";
const imageAddress = "/assets/images/";

const Projects = () => {
  const [data, setData] = useState(null);
  const { siteID } = useParams();
  useEffect(() => {
    if (!siteID) return;
    if (siteID) {
      const newData = projects.find((item) => item.id === siteID);

      setData(newData);
    }
  }, [siteID]);
  const { homeOn, aboutOn } = useGlobalContext();
  const history = useHistory();
  const handlewheel = (e) => {
    if (e.deltaY < 0) {
      history.push("/");
      homeOn();
    } else {
      history.push("/about");
      aboutOn();
    }
  };
  if (!data) return <div></div>;
  else {
    const { id, title, text, url, images } = data;
    return (
      <div
        className="project-container"
        onWheel={(e) => {
          handlewheel(e);
        }}
      >
        <h2>{`Project ${id}.${title}`}</h2>
        <div className="line"></div>
        <div className="about-container-header projects">
          <img src="/assets/images/MyPhoto.jpg" alt="Riza" />
          <div className="text">
            {text.map((line, index) => {
              return <h4 key={index}>{line}</h4>;
            })}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              go to page
            </a>
          </div>
        </div>

        <div className="line"></div>
        <div className="project-images-container">
          {images.map((image, index) => {
            return (
              <img
                className="images"
                key={index}
                src={`${imageAddress}${image}.jpg`}
                alt="web3"
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Projects;
