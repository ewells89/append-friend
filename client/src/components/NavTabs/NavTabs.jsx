import React from "react";
import "./NavTabs.css";
import {NavLink} from "react-router-dom";

const NavTabs = () => {
  return (
    <div className="col s12">
      <ul className="tabs tabs-icon">
        <li className="tab col s3"><NavLink to="/developers"><i className="material-icons">people</i>Developers</NavLink></li>
        {/* <li className="tab col s3"><a href="#test2"><i className="material-icons">computer</i>Projects</a></li> */}
        <li className="tab col s3"><NavLink to="/profile"><i className="material-icons">account_box</i>Profile</NavLink></li>
          
          
        <a className="tab col s3 right"><NavLink to="/signin"><i className="material-icons">close</i>Sign Out</NavLink></a>
      </ul>
    </div>
  );
};

export default NavTabs;