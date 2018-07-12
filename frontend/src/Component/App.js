import React, { Component } from "react";
import * as actions from "../actions";
import Header from "./Header";
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import Contents from "./Contents";
import Signout from './auth/Signout';


class App extends Component {
  
  render() {
    return (
      <div className="ui container">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/contents" component={Contents} />
            <Route path="/signout" component={Signout}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
