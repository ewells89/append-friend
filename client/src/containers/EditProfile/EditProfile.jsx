import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./EditProfile.css";
import ImageUploader from 'react-images-upload';

/**** STOP HERE ****/

const EditProfile = (authUser) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    gitHub: "",
    about: "",
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

  const [pictures,setPictures] = useState([]);

  const history = useHistory();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const handleFormSubmit = (e) => {
    e.preventDefault();
    const queryURL = "api/developer/" + authUser.authUser;
    const userInfo = {
      name:state.name,
      email:state.email,
      experience:state.experience,
      location:state.location,
      occupation:state.occupation,
      appRole:state.appRole,
      gitHub:state.gitHub,
      about:state.about,
      imgURL:state.imgURL,
    };
    console.log(queryURL);
    console.log(userInfo);
    axios
      .put(queryURL, userInfo)
      .then((response) => {
        console.log(response.data);
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInputChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleDeleteProfile = (e) => {
    e.preventDefault();
    const queryURL = "api/developer/" + authUser.authUser;
    console.log(queryURL);
    axios.delete(queryURL).then(() => {
      history.push("/");
    })
  }

  const onDrop = (pictureFiles,pictureDataURLs) => {
     console.log(pictureFiles[0]);
     setPictures(pictureFiles[0]);
  }

  const handleImageUpload = () => {
    const fd = new FormData();
    fd.append("file",pictures)
    fd.append("upload_preset","ml_default")
    axios.post("https://api.cloudinary.com/v1_1/kayilan/image/upload", fd)
    .then(res => {
      // console.log(res);
      setState({...state, imgURL:(res.data.secure_url)});
      // console.log(imgURL);
    }).catch((err) => {
      console.log(err);
    });
  
  }

  return (
    <>
      <Navbar />
      <div className="container" id="profilePage">
        <div className="row">
          <div className="col s6" id="profilePageColumn">
            
            <ImageUploader
                  withIcon={true}
                  buttonText='Choose image'
                  onChange={onDrop}
                  imgExtension={['.jpg', '.gif', '.png']}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={true}
              />
            
            
            <div className="row" id="profilePageColumnUpload">
              <button 
                id="upload-button" 
                className="waves-effect grey darken-3 waves-dark btn"
                onClick={handleImageUpload}>
                Upload
              </button>
            </div>
          </div>

          <div className="col s6" id="profilePageColumn"></div>
        </div>

        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <div className="col s6" id="profilePageColumn">
              <div className="input-field">
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <input
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
                <select
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
                <p>About Me:</p>
                <div className="input-field">
                  <textarea
                    id="about"
                    className="materialize-textarea"
                    value={state.about}
                    onChange={handleInputChange}
                  ></textarea>
                  <label className="active" for="about">
                    Enter a professional description of yourself here.
                  </label>
                </div>
              </div>
            </div>
            <div className="col s12">
        <div className="row">
          <div className="col s6" id="profilePageColumn">
            <button id="delete-button" className="waves-effect red waves-dark btn" onClick={handleDeleteProfile}>
              Delete Profile
            </button>
          </div>
          <div className="col s6" id="profilePageColumnSave">
          <button type="submit" id="save-button" className="waves-effect blue lighten-1 waves-dark btn">
            Save Changes
          </button>
          </div>
        </div>
        </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
