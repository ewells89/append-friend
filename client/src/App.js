import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
