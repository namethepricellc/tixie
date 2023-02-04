import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

class App extends Component {
    render() {
      return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Tixie
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route key={1} exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;
