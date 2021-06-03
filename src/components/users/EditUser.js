import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
var FA = require("react-fontawesome");

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      const result = await Axios.get(`http://localhost:3005/users/${id}`);
      setUser(result.data);
    };
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(`http://localhost:3005/users/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container mt-4 col-lg-6">
      <div className="card">
        <h5 className="card-header">Edit user details </h5>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                id=""
                className="form-control"
                placeholder="Name"
                value={user.name}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                id=""
                placeholder="Username"
                onChange={(e) => handleInputChange(e)}
                className="form-control"
                value={user.username}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                id=""
                placeholder="E-mail"
                value={user.email}
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone number"
                value={user.phone}
                onChange={(e) => handleInputChange(e)}
                className="form-control"
              />
            </div>
            <button className="btn btn-outline-success me-2">
              <i className="fa fa-check"></i> Update
            </button>

            <Link to="/" className="btn btn-outline-danger">
              <FA name="times" />
              &nbsp; Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
