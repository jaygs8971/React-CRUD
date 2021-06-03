import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
var FA = require("react-fontawesome");

const UserDetails = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      const result = await Axios.get(`http://localhost:3005/users/${id}`);
      setUser(result.data);
    };

    loadUser();
  }, []);

  return (
    <div className="container-sm mt-4 col-lg-6">
      <div className="card">
        <h5 className="card-header"> {user.name}</h5>
        <div className="card-body ">
          <div className="table-responsive">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <th scope="row">User ID</th>
                  <td>{id}</td>
                </tr>
                <tr>
                  <th scope="row">Username</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th scope="row">E-mail</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th scope="row">Phone Number</th>
                  <td>{user.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link className="btn btn-outline-primary mt-2" to="/">
            <FA name="chevron-left" />
            &nbsp; Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
