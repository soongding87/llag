import React, { Component } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
