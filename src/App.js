import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from "./components/users/EditUser";
import UserDetails from "./components/users/UserDetails";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={UserDetails} />
          <Route exact path="/react-crud" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     const token = localStorage.getItem("token");
//     let loggedIn = true;
//     if (token == null) {
//       loggedIn = false;
//     }

//     this.state = {
//       loggedIn,
//     };
//   }
//   componentDidMount() {
//     this.setState({});
//   }
//   render() {
//     if (this.state.loggedIn === true) {
//       return (
//         <Router>
//           <div className="App">
//             <Navbar />

//             <Switch>
//               {/* <Route exact path="/" component={Admin} /> */}
//               <Route exact path="/" component={Login} />
//               <Route exact path="/logout" component={Logout} />
//               <Route exact path="/home" component={Home} />
//               <Route exact path="/about" component={About} />
//               <Route exact path="/contact" component={Contact} />
//               <Route exact path="/users/add" component={AddUser} />
//               <Route exact path="/users/edit/:id" component={EditUser} />
//               <Route exact path="/users/:id" component={UserDetails} />
//               <Route component={NotFound} />
//             </Switch>
//           </div>
//         </Router>
//       );
//     } else {
//       return (
//         <Router>
//           <div className="App">
//             <Navbar />
//             <Switch>
//               {/* <Route exact path="/" component={Admin} /> */}
//               <Route exact path="/" component={Login} />
//               <Route exact path="/home" component={Login} />
//               <Route exact path="/about" component={About} />
//               <Route component={NotFound} />
//             </Switch>
//           </div>
//         </Router>
//       );
//     }
//   }
// }
