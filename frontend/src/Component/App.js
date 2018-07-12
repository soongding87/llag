import React, { Component } from "react";
import * as actions from "../actions";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import Contents from "./Contents";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  clearSession() {
    localStorage.removeItem("session");
  }

  render() {
    return (
      <div className="ui container">
        <Header onSignOut={this.clearSession} />
        <BrowserRouter>
          <div>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/contents" component={Contents} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
