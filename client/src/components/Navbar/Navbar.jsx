import React from "react";
import "./Navbar.css";
import NavTabs from "../NavTabs/NavTabs.jsx";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavTabs />
      <nav>
        <div className="nav-wrapper">
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="left hide-on-med-and-down col">
            <li>
              <NavLink to="/developers">All Developers</NavLink>
            </li>
            <li>
              <a href="/">Linked Developers</a>
            </li>
          </ul>
          <div className="right" id="search-div">
                <input id="search" type="search" placeholder="Search Developers..."/>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/developers">All Developers</NavLink>
        </li>
        <li>
          <a href="/">Linked Developers</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;