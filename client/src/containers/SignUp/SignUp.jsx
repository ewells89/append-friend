import React from "react";
import "./SignUp.css";
import SignupForm from "../../components/SignUpForm/SignUpForm";
import axios from "axios";
import {useHistory} from "react-router-dom";
import jwt from "jsonwebtoken";

function SignUp({setToken, setAuthUser}) {
  const history = useHistory();

  const handleFormSubmit = (userData) => {
    axios
      .post("api/auth", userData)
      .then((response) => {
        console.log(response.data);
        jwt.verify(response.data.token, process.env.REACT_APP_JWT_SIGNATURE, (err,decoded) => {
          if(err){
            console.log(err);
          }else{
            setToken(response.data.token);
            setAuthUser(response.data.user);
            history.push("/developers");
          }
        });
      })
      .catch((err) => {
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
        <SignupForm handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default SignUp;
