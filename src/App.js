import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditUser from "./components/users/EditUser";
import UserDetails from "./components/users/UserDetails";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
// import Admin from "./components/pages/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Admin} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={UserDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
