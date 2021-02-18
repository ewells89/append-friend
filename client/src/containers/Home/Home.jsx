import React from "react";
import "./Home.css";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3 id="appTitle" className="center">.<span id="titleAppend">append</span>(<span id="titleFriend">friend</span>)</h3>
      <div className="container" id="landing-background">
        <div className="landing-buttons">
          <div className="homeText">
            <h5><b>Find your connections!</b></h5>
            <p>Start looking for developers to connect with!</p>
            <NavLink to="/signin" id="landing-sign-in-button" className="waves-effect waves-light blue darken-1 btn-small">Sign in</NavLink>
            <NavLink to="/signup" id="landing-sign-up-button" className="waves-effect waves-light blue darken-1 btn-small">Sign up</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
