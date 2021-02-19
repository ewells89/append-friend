import axios from "axios";
import React, { useState } from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import {NavLink} from "react-router-dom";

const SignIn = ({setToken, setAuthUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", { username, password })
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
      <div className="row input-fields">
        <p id="please-sign-in">Please sign in below.</p>
        <form className="col s12" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username"
                className="validate"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    className="validate"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <button id="sign-in-button" className="waves-effect waves-dark blue darken-1 btn-small">
            Sign in
          </button>
          <NavLink
            to="/signup"
            id="sign-up-button"
            className="waves-effect waves-dark blue darken-1 btn-small"
          >
            Sign up
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SignIn;
