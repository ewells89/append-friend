import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 id="landing-title" className="center">.append(friend) - TITLE PLACEHOLDER</h1>
      <div className="container" id="landing-background">
        <div className="landing-buttons">
          <a href="/signin" id="landing-sign-in-button" className="waves-effect waves-light btn-large">Sign in</a>
          <a href="/signup" id="landing-sign-up-button" className="waves-effect waves-light btn-large">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Home;
