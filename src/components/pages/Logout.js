import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div className="container mt-4">
        <h5 className="alert alert-info">
          <i className="fa fa-info-circle"></i>&nbsp;Logged out
          successfully.&nbsp;
          <Link to="/">Login</Link> again?
        </h5>
      </div>
    );
  }
}
