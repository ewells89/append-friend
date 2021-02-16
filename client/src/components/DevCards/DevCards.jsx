import React from 'react';
import './DevCards.css';
// import PropTypes from "prop-types";

const DevCards = ({username,name,gitHub,description,phone,experience,location,occupation,appRole,}) => {
    return (
        
        <div className="col s4">
            <div className="card" id="devCardBody">
                <div className="row">
                    <div className="col s5">
                        <div className="card-image">
                            <img id="devCardDevImage" src="" alt={name}/>
                        </div>
                    </div>
                
                    <div className="col s7" id="devCardDevNameColumn">
                        <div className="row">
                            <div id="devCardDevName">
                                <p className="devCardP">{name}</p>
                            </div>
                            <div id="devCardDevOccupation">
                                <p className="devCardP">Software Engineer
                                    {occupation}
                                    </p>
                            </div>
                            <div id="devCardDevRole">
                                <p className="devCardP">Mentor
                                    {appRole}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-content" id="devCardDevDescription">
                        <p>Description of the developer or some other content will go here.
                            {description}
                        </p>
                        <a className="btn-floating waves-effect waves-light grey lighten-3" id="devCardLikeButton"><i className="material-icons pink-text text-accent-1">favorite</i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevCards;