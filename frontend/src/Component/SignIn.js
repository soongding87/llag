import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

import axios from 'axios';

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/login').then(function(res) {
      console.log('login is working');
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
                  value={this.state.username}
              onChange={this.handleChange('username')}
            />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </Form.Field>

          <Button >Submit</Button>
        </Form>
      </div>

    );
  }
}

export default SignIn;
