import React from 'react';
import './DevCards.css';


const ProjectCard = () => {
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card" id="devCardBody">
                    <div className="row">
                        <div className="col s5">
                            <div className="card-image">
                                <img id="devCardDevImage" src=""/>
                            </div>
                        </div>
                    
                        <div className="col s7" id="devCardDevNameColumn">
                            <div id="devCardDevName">
                                <p>Dev Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-content" id="devCardDevDescription">
                            <p>Description of the developer will go here.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-content" id="devCardDevLanguages">
                            <p>Developer languages will be listed here.</p>
                            <a className="btn-floating  waves-effect waves-light black" id="devCardLikeButton"><i class="material-icons">favorite</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProjectCard;