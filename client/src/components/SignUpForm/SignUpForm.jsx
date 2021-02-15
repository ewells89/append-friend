import React, { useState } from "react";

const SignupForm = ({handleFormSubmit}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    gitHub: "",
    languages: [],
    email: "",
    phone: 0,
    experience: 0,
    location: "",
    occupation: "",
    appRole: "",
    followedUsers: [],
    usersFollowing: [],
  });

  const updateForm = (e) =>
    setState({ ...state, [e.target.id]: e.target.value });

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [gitHub, setGithub] = useState("");
  // const [location, setLocation] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [experience, setExperience] = useState("");
  // const [languages, setLanguages] = useState([]);
  // const [followedUsers, setFollowedUsers] = useState([]);
  // const [usersFollowing, setUsersFollowing] = useState([]);

  return (
    <div>
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
              placeholder="Name"
              id="name"
              type="text"
              className="validate"
              value={state.name}
              onChange={updateForm}
            />
            <label for="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="username"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.username}
            />
            <label for="username">Username</label>
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
            <label for="password">Password</label>
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
            <label for="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.phone}
            />
            <label for="phone">Phone</label>
          </div>
          <div className="input-field col s6">
            <input
              id="gitHub"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.gitHub}
            />
            <label for="gitHub">Github Profile</label>
          </div>
          <div className="input-field col s6">
            <input
              id="location"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.location}
            />
            <label for="location">Location</label>
          </div>
          <div className="input-field col s6">
            <input
              id="occupation"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.occupation}
            />
            <label for="occupation">Occupation</label>
          </div>
          <div className="input-field col s6">
            <input
              id="experience"
              type="text"
              className="validate"
              onChange={updateForm}
              value={state.experience}
            />
            <label for="experience">Years of Experience</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-dark"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
