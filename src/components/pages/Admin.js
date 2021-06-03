import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/" />;
    }
  }
}
