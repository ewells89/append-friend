import React from 'react';
import './DevCards.css';
import PropTypes from "prop-types";

const DevCards = ({username,name,github,languages,phone,experience,location,occupation,appRole,}) => {
    return (
        
        <div className="col s4">
            <div className="card" id="devCardBody">
                <div className="row">
                    <div className="col s5">
                        <div className="card-image">
                            <img id="devCardDevImage" src=""/>
                        </div>
                    </div>
                
                    <div className="col s7" id="devCardDevNameColumn">
                        <div id="devCardDevName">
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card-content" id="devCardDevDescription">
                        <p>Description of the developer or some other content will go here.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="card-content" id="devCardDevLanguages">
                        <p>{languages}</p>
                        <a className="btn-floating  waves-effect waves-light black" id="devCardLikeButton"><i className="material-icons">favorite</i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevCards;