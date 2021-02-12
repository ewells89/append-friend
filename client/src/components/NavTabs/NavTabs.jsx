import React from "react";
import "./NavTabs.css";

const NavTabs = () => {
  return (
    <div className="col s12">
      <ul className="tabs tabs-icon">
        <li className="tab col s3"><a href="/developers"><i className="material-icons">people</i>Developers</a></li>
        {/* <li className="tab col s3"><a href="#test2"><i className="material-icons">computer</i>Projects</a></li> */}
        <li className="tab col s3"><a href="/profile"><i className="material-icons">account_box</i>Profile</a></li>
        <li className="tab col s3 right"><a href="#test4"><i className="material-icons">close</i>Sign Out</a></li>
      </ul>
    </div>
  );
};

export default NavTabs;
