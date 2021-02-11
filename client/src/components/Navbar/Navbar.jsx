import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="tabs z-depth-1">
        <li className="tab">
          <a href="/developers">Developers</a>
        </li>
        <li className="tab disabled">
          <a href="/">Projects</a>
        
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="left hide-on-med-and-down col">
            <li>
              <a href="/developers">All Developers</a>
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
          <a href="/developers">All Developers</a>
        </li>
        <li>
          <a href="/">Linked Developers</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;