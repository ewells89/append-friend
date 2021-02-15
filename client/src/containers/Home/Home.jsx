import React from "react";
import "./Home.css";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 id="landing-title" className="center">.append(friend) - TITLE PLACEHOLDER</h1>
      <div className="container" id="landing-background">
        <div className="landing-buttons">
          <NavLink to="/signin" id="landing-sign-in-button" className="waves-effect waves-light btn-large">Sign in</NavLink>
          <NavLink to="/signup" id="landing-sign-up-button" className="waves-effect waves-light btn-large">Sign up</NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
