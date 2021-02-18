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
    <>
    <h3 id="appTitle" className="center">.<span id="titleAppend">append</span>(<span id="titleFriend">friend</span>)</h3>
      <div className="container" id="signUpContainer">
        <div className="row">
          <div className="col s12">
            <h4>Please enter your account details below.</h4>
          </div>
        </div>
        <div className="row">
          <SignupForm handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}

export default SignUp;
