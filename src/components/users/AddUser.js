import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
var FA = require("react-fontawesome");

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3005/users", user);
    history.push("/");
  };

  return (
    <div className="container mt-4 col-lg-6">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link className="nav-link " aria-current="true" to="/">
                <i className="fas fa-users"></i>&nbsp;User List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/users/add">
                <i className="fas fa-user-plus"></i>&nbsp;Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <i className="fas fa-sign-out-alt"></i>&nbsp;Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-body">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  maxLength="20"
                  className="form-control"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  maxLength="20"
                  required
                  placeholder="Username"
                  onChange={(e) => handleInputChange(e)}
                  className="form-control"
                  value={user.username}
                />
              </div>
              <div className="mb-3">
                <input
                  maxLength="50"
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail"
                  value={user.email}
                  onChange={(e) => handleInputChange(e)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  pattern="\d*"
                  name="phone"
                  required
                  maxLength="11"
                  placeholder="Phone number"
                  value={user.phone}
                  onChange={(e) => handleInputChange(e)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-outline-success me-2">
                <i className="fa fa-user-plus"></i> Add
              </button>

              <Link to="/" className="btn btn-outline-danger">
                <FA name="times" />
                &nbsp; Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
