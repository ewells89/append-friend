import React from 'react';
import './DevCards.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';
// import PropTypes from "prop-types";

const DevCards = ({_id,username,name,gitHub,about,phone,experience,location,occupation,appRole,imgURL}) => {

    const likeButton = (id) => {
        const storedID = localStorage.getItem("loggedUserID");
        const queryURL = "/api/developer/like/" + storedID;
        axios
          .put(queryURL, {_id})
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    return (
        <div className="col l4 m6 s12" id="devCardDisplayCol">
            <div className="card" id="devCardBody">
                <div className="row">
                    <div className="col s5">
                        <div className="card-image">
                            <img id="devCardDevImage" src={imgURL} alt={name}/>
                        </div>
                    </div>
                
                    <div className="col s7" id="devCardDevNameColumn">
                        <div className="row">
                            <div id="devCardDevName">
                                <p className="devCardP">{name}</p>
                            </div>
                            <div id="devCardDevOccupation">
                                <p className="devCardP">
                                    {occupation}
                                    </p>
                            </div>
                            <div id="devCardDevRole">
                                <p className="devCardP">
                                    {appRole}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="devCardRow">
                    <div className="card-content" id="devCardDevDescription">
                        <p>
                            {about}
                        </p>
                    </div>
                </div>
                <div className="row" id="devCardRow">
                    <div className="col s6">
                        <NavLink to={`/developerprofile/${_id}`} ><button className="waves-effect waves-light white-text blue lighten-1 btn-small">Profile</button></NavLink>
                    </div>
                    <div className="col s6" id="devCardButtonLike">
                        <button className="waves-effect waves-light pink lighten-1 btn-small" onClick={()=>{likeButton(_id)}}>
                            <i className="material-icons">favorite</i>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DevCards;