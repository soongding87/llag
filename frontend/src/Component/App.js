import React, { Component } from "react";
import * as actions from "../actions";
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Landing from "./Landing";
import Contents from "./Contents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    setTimeout(() => {
      this.setState({ render: true });
    }, 300);
  }

  render() {
    if (this.state.render === false) {
      return (
        <div>
          <h2>...Loading</h2>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/contents" component={Contents} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default connect(null, actions)(App);
