import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container">
      <h1>This is the home page.</h1>
      <DevCards />
      </div>
    </>
  );
};

export default Home;
