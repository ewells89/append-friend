import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
    <h4 style={{fontFamily: "monospace", textAlign: "center"}}>.append(friend)</h4>
      <div className="row input-fields">
        <p id="please-sign-in">Please sign in below.</p>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username"
                className="validate"
                placeholder="Username"
              />
            </div>
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    className="validate"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button id="sign-in-button" className="waves-effect waves-dark btn">Sign in</button>
          <a href="/signup" id="sign-up-button" className="waves-effect waves-dark btn">Sign up</a>
        </form>
      </div>
    </>
  );
};

export default SignIn;
