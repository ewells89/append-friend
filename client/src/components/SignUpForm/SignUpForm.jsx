import React, { useState } from "react";
import "./SignUpForm.css";

const SignupForm = ({handleFormSubmit}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    gitHub: "",
    languages: [],
    email: "",
    phone: "",
    experience: "",
    location: "",
    occupation: "",
    appRole: "",
    followedUsers: [],
    usersFollowing: [],
  });

  const updateForm = (e) =>
    setState({ ...state, [e.target.id]: e.target.value });

  return (
    <div className="container">
      <form
        className="col s12"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit(state);
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              
              id="name"
              type="text"
              className="validate"
              value={state.name}
              onChange={updateForm}
            />
            <label>Name *</label>
          </div>
          <div className="input-field col s6">
            <input
              id="username"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.username}
            />
            <label>Username *</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              onChange={updateForm}
              value={state.password}
            />
            <label>Password *</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              className="validate"
              onChange={updateForm}
              value={state.email}
            />
            <label>Email *</label>
          </div>
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              placeholder= "Enter number with no dashes or parentheses"
              className="validate"
              onChange={updateForm}
              value={state.phone}
            />
            <label className="active">Phone</label>
          </div>
          <div className="input-field col s6">
            <input
              id="gitHub"
              type="text"
              className="validate"
              placeholder="https://github.com/{profileName}"
              onChange={updateForm}
              value={state.gitHub}
            />
            <label className="active">Github Profile</label>
          </div>
          <div className="input-field col s6">
            <input
              id="location"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.location}
            />
            <label>Location</label>
          </div>
          <div className="input-field col s6">
            <input
              id="occupation"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.occupation}
            />
            <label>Occupation</label>
          </div>
          <div className="input-field col s6">
            <input
              id="experience"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.experience}
            />
            <label>Years of Experience</label>
          </div>
        </div>
        <div className="row" id="signUpButton">
          <button
            className="btn waves-effect waves-dark blue darken-1 btn-small"
            type="submit"
            name="action"
            id="signUpButton"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
