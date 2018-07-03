import React, { Component } from 'react';
import * as actions from '../actions';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Contents from './Contents';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  constructor(props) {
    super();
  }

  render() {
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

export default connect(null, actions)(App);
