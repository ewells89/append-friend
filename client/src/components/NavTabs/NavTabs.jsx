import React from "react";
import "./NavTabs.css";

const NavTabs = () => {
  return (
    <div class="col s12">
      <ul class="tabs tabs-icon">
        <li class="tab col s3"><a href="/developers"><i class="material-icons">people</i>Developers</a></li>
        {/* <li class="tab col s3"><a href="#test2"><i class="material-icons">computer</i>Projects</a></li> */}
        <li class="tab col s3"><a href="/profile"><i class="material-icons">account_box</i>Profile</a></li>
        <li class="tab col s3 right"><a href="#test4"><i class="material-icons">close</i>Sign Out</a></li>
      </ul>
    </div>
  );
};

export default NavTabs;
