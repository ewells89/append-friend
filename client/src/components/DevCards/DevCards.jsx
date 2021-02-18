import React from 'react';
import './DevCards.css';
// import PropTypes from "prop-types";

const DevCards = ({username,name,gitHub,description,phone,experience,location,occupation,appRole,imgURL}) => {
    return (
        
        <div className="col s4">
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
                            {description}
                        </p>
                    </div>
                </div>
                <div className="row" id="devCardRow">
                    <div className="col s6">
                        <button class="waves-effect waves-light white-text grey  btn-small">Profile</button>
                    </div>
                    <div className="col s6" id="devCardButtonLike">
                        <button className="waves-effect waves-light grey btn-small">
                            <i className="material-icons">favorite</i>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DevCards;