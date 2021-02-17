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
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="row">
              <div className="col s12">
                <div className="card">
                  <div className="card-image">
                    <img src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555347235/shape/mentalfloss/silence_of_the_lambs_0.jpg?itok=alannxlk" />
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
                      <li className="collection-item">{state.gitHub}</li>
                      <li className="collection-item">{state.email}</li>
                      <li className="collection-item">{state.phone}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col s6">
            <div className="col s12">
              <h6 className="header">About Me:</h6>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{state.languages}</p>
                  </div>
                  <div className="card-action">
                    <a href="">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="profilePageButtons">
              <NavLink
                to="/editprofile"
                id="edit-profile-button"
                className="waves-effect waves-dark btn"
              >
                Edit Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
