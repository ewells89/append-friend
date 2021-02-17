import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import ImageUpload from "../../components/ImageUpload/ImageUpload";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = (authUser) => {
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

  const getUserInfo = () => {
    const queryURL = "api/developer/" + authUser.authUser;
    console.log(queryURL);
    axios
      .get(queryURL)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUserInfo();
  }, []);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="container" id="profilePage">
        <div className="row">
          <div className="col s6" id="profilePageColumn">
            <img id="profilePagePicture" src="" alt=""/>
          </div>
          <div className="col s6" id="profilePageColumn"></div>
        </div>

        <div className="row">
          <form>
            <div className="col s6" id="profilePageColumn">
              <div className="input-field">
                <input disabled
                  id="name"
                  type="text"
                  className="validate"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <label className="active" for="name">
                  Name
                </label>
              </div>

              <div className="input-field">
                <input disabled
                  id="email"
                  type="text"
                  className="validate"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <label className="active" for="email">
                  Email
                </label>
              </div>

              <div className="input-field">
                <input disabled
                  id="phone"
                  type="text"
                  className="validate"
                  value={state.phone}
                  onChange={handleInputChange}
                />
                <label className="active" for="phone">
                  Phone
                </label>
              </div>

              <div className="input-field">
                <input disabled
                  id="experience"
                  type="text"
                  className="validate"
                  value={state.experience}
                  onChange={handleInputChange}
                />
                <label className="active" for="experience">
                  Years of Experience
                </label>
              </div>

              <div className="input-field">
                <input disabled
                  id="occupation"
                  type="text"
                  className="validate"
                  value={state.occupation}
                  onChange={handleInputChange}
                />
                <label className="active" for="occupation">
                  Occupation/Job Title
                </label>
              </div>

              <div className="input-field">
                <input disabled
                  id="gitHub"
                  type="text"
                  className="validate"
                  value={state.gitHub}
                  onChange={handleInputChange}
                />
                <label className="active" for="gitHub">
                  GitHub URL{" "}
                </label>
              </div>
            </div>

            <div className="col s6" id="profilePageColumn">
              <div className="row">
                <label>Role</label>
                <select disabled
                  className="browser-default"
                  id="appRole"
                  value={state.appRole}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Choose your role
                  </option>
                  <option value="Mentor">Mentor</option>
                  <option value="Mentee">Mentee</option>
                  <option value="Collaborator">Collaborator</option>
                </select>
              </div>

              <div className="row">
                <p>Languages</p>
                <div className="input-field">
                  <textarea  disabled
                    id="languages"
                    className="materialize-textarea"
                    value={state.languages}
                    onChange={handleInputChange}
                  ></textarea>
                  <label className="active" for="languages">
                    Enter your regularly used languages here.
                  </label>
                </div>
              </div>
            </div>
           
          </form>
        </div>
        <div className="row" id="profilePageButtons">
            <NavLink
                to="/editprofile"
                id="edit-profile-button"
                className="waves-effect waves-dark btn"
                >Edit Profile
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
