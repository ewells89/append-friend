import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import ImageUpload from "../../components/ImageUpload/ImageUpload";
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

  const [pictures,setPictures] = useState([]);
  const [imgURL, setImgURL] = useState("");

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
  }, []);

  const userInfo = {
    name:state.name,
    email:state.email,
    experience:state.experience,
    location:state.location,
    occupation:state.occupation,
    appRole:state.appRole,
    gitHub:state.gitHub,
    languages:state.languages,
  };

  const handleFormSubmit = (e,userData) => {
    e.preventDefault();
    const queryURL = "api/developer/" + authUser.authUser;
    console.log(queryURL);
    console.log(userInfo);
    axios
      .put(queryURL, userData)
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

  /* Maybe: Build in this function to the handleFormSubmit function & 
     remove image upload button. */
  const handleImageUpload = () => {
    const fd = new FormData();
    /* TODO: Figure out how to pass down the authUser value on state 
    from app.js and use it as part of the input parameters to the axios 
    call. We can use this value to retrieve the image from storage. */
    fd.append("file",pictures)
    fd.append("upload_preset","ml_default")
    /* TODO: Add API Post route here. */
    axios.post("https://api.cloudinary.com/v1_1/kayilan/image/upload", fd)
    .then(res => {
      // console.log(res);
      setImgURL(res.data.secure_url);
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
          <form onSubmit={(e) => {handleFormSubmit(e,userInfo)}}>
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
                <p>Languages</p>
                <div className="input-field">
                  <textarea
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
            <div className="col s12">
        <div className="row">
          <div className="col s6" id="profilePageColumn">
            <button id="delete-button" className="waves-effect red waves-dark btn" onClick={handleDeleteProfile}>
              Delete Profile
            </button>
          </div>
          <div className="col s6" id="profilePageColumnSave">
          <button id="save-button" className="waves-effect waves-dark btn">
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
