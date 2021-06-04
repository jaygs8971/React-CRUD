import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    const { username, password } = this.state;
    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "thisisrandom");
      this.setState({
        loggedIn: true,
      });
    } else {
      alert("Incorrect username or password!");
      e.preventDefault();
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container mt-4 col-lg-6">
        <div className="card">
          <h5 className="card-header">Login</h5>
          <div className="card-body">
            <form onSubmit={this.submitForm}>
              <div>
                <input
                  required
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChange}
                  className="form-control mb-3"
                />
              </div>
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                className="form-control"
                onChange={this.onChange}
              />
              <br />
              <button className="btn btn-outline-success">
                <i className="fas fa-sign-in-alt"></i> Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
