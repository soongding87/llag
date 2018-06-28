import React, { Component } from "react";
import * as actions from "../actions";
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";

class App extends Component {
  // componentDidMount() {
  //   this.props.loginUser();
  // }
  // store = createStore(reducers, {}, applyMiddleware(reduxThunk));

  render() {
    console.log(this.props.store);
    return (
      <div className="ui container">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ log }) {
  return { log };
}

export default connect(null, actions)(App);
