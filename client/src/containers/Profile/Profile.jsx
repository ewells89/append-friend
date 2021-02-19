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
    imgURL: "",
  });

  const getUserInfo = () => {
    console.log(authUser.authUser);
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
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="card">
              <div className="card-image" >
                <img src={state.imgURL} id="profilePagePicture"/>
                <span className="card-title" id="name">
                  {state.name}
                </span>
              </div>

              <div className="card-content">
                <ul className="collection">
                  <li className="collection-item" placeholder="App Role:">
                    Role: {state.appRole}
                  </li>
                  <li className="collection-item">
                    Occupation: {state.occupation}
                  </li>
                  <li className="collection-item">
                    Experience: {state.experience} years
                  </li>
                  <li className="collection-item">
                    Location: {state.location}
                  </li>
                  <li className="collection-item">gitHub: {state.gitHub}</li>
                  <li className="collection-item">Email: {state.email}</li>
                  <li className="collection-item">Phone: {state.phone}</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col s6" id="profilePageAboutCol">

            <div className="row">
              <h6 className="header">About Me:</h6>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{state.about}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row" id="profilePageButtons">
              <NavLink
                to="/editprofile"
                id="edit-profile-button"
                className="waves-effect waves-dark blue lighten-1 btn-small"
              >Edit Profile
              </NavLink>
            </div>
      </div>
    </>
  );
};

export default Profile;
