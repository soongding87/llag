import React, { Component } from "react";
import * as actions from "../actions";
import Header from "./Header";
import Footer from "./Footer";

import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import Contents from "./Contents";
import Signout from "./auth/Signout";
import "../styling/app.css";


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header onSignOut={this.clearSession} />
        <BrowserRouter>
          <div>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/contents" component={Contents} />
            <Route path="/signout" component={Signout} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
