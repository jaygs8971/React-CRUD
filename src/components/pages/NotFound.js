import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className=" not-found">
      <p className="display-5">
        Page not found!
        <p className="display-5"></p>
        <NavLink className="nav-link" exact to="/">
          Back to Home
        </NavLink>
      </p>
    </div>
  );
};

export default NotFound;
