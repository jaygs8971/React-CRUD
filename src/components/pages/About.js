import React from "react";

const About = () => {
  return (
    <div className="container mt-4 col-lg-6">
      <h3 className="mb-3">User Credentials</h3>
      <p className="lead">Username: admin</p>
      <p className="lead">Password: 1234</p>
      <p>Use the above credentials for signing in into the application.</p>
      <h3 className="mb-3 pt-4">Token</h3>
      <p className="lead">Name: token</p>
      <p>
        Once the user logs in into the application, a token is created and is
        stored at local storage of the brower. To view the token, open{" "}
        <i>DevTools &gt; Application</i>
      </p>

      <h3 className="mb-3 pt-4">Hooks</h3>
      <p className="lead">useState and useEffect</p>
      <p>The application uses hooks for performing CRUD operations.</p>
    </div>
  );
};

export default About;
