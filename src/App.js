import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import About from "./About";

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <div className="main-background">
          <img src="/assets/images/johannes_plenio.jpg" alt="main-background" />
          <div className="color"></div>
        </div>

        <Navbar />
        <div className="content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project/:siteID">
              <ProjectDetail />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="*">
          <Error/>
        </Route> */}
          </Switch>
        </div>
        <footer className="footer">
          <h5> background design by johannes plenio from pexels</h5>
        </footer>
      </Router>
    </div>
  );
};

export default App;
