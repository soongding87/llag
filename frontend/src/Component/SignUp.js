import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class SignUp extends Component {
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
    axios.post('/api/users', this.state).then(function(res) {
      console.log('submit is working');
    });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            value={this.state.username}
            onChange={this.handleChange('username')}
            placeholder="YourName"
          />
        </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              value={this.state.password}
              autoComplete="current-password"
                  onChange={this.handleChange("password")}

              placeholder="Password"
            />
          </FormGroup>
        <Button onClick={this.handleSubmit}>submit</Button>
      </Form>

      // <form
      //   className={classes.container}
      //   noValidate
      //   autoComplete="off"
      //   onSubmit={this.handleSubmit}
      // >
      //   <TextField
      //     required
      //     id="required"
      //     label="name"
      //     value={this.state.username}
      //     className={classes.textField}
      //     onChange={this.handleChange("username")}
      //     margin="normal"
      //   />
      //
      //   <TextField
      //     id="password-input"
      //     label="Password"
      //     className={classes.textField}
      //     type="password"
      //     value={this.state.password}
      //     autoComplete="current-password"
      //     onChange={this.handleChange("password")}
      //     margin="normal"
      //   />
      // </form>
    );
  }
}

export default SignUp;
