import { NavLink } from "react-router-dom";

import React, { Component } from "react";

export default class Navbar extends Component {
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
    let buttons;

    if (this.state.loggedIn) {
      buttons = (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      );
    }

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#801d76" }}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="https://www.pikpng.com/pngl/b/269-2690057_we-design-and-develop-mobile-apps-in-react.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {buttons}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-dark "
//       style={{ backgroundColor: "#801d76" }}
//     >
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           <img
//             src="https://www.pikpng.com/pngl/b/269-2690057_we-design-and-develop-mobile-apps-in-react.png"
//             alt="logo"
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/users/add">
//                 Add User
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/about">
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <Link className="btn btn-outline-light" to="/">
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
