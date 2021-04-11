import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Alert from "./Components/layout/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import Home from "./Components/pages/Home";
import Navbar from "./Components/layout/Navbar";
import NotFound from "./Components/pages/NotFound";
import User from "./Components/users/User";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
