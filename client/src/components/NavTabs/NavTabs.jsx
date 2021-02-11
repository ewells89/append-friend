import React from "react";

const NavTabs = () => {
  return (
    <ul className="tabs z-depth-1">
      <li className="tab">
        <a href="/developers">Developers</a>
      </li>
      <li className="tab disabled">
        <a href="/">Projects</a>
      </li>
    </ul>
  );
};

export default NavTabs;
