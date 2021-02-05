import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
