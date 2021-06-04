import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
export default class Logout extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 4000);
  }

  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div className="container mt-4 col-lg-6">
        <h5 className="alert alert-info">
          <i className="fa fa-info-circle"></i>&nbsp;Logged out
          successfully.&nbsp;Redirecting to <Link to="/">Login</Link> page.
        </h5>
      </div>
    );
  }
}
