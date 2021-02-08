import React from "react";
import "./SignUp.css";
import SignupForm from "../../components/SignUpForm/SignUpForm";
import axios from "axios";

function SignUp () {
  const handleFormSubmit = (e,userData) => {
    e.preventDefault();
    axios.post("api/developer",userData).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Register a new account</h1>
        </div>
      </div>
      <div className="row">
      <SignupForm handleFormSubmit={handleFormSubmit}/>
      </div>
      
    </div>
  );
}

export default SignUp;