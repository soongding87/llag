import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class SignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/users", this.state).then(function(res) {
      console.log("submit is working");
      res.redirect("/");
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          required
          id="required"
          label="name"
          value={this.state.username}
          className={classes.textField}
          onChange={this.handleChange("username")}
          margin="normal"
        />

        <TextField
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password"
          value={this.state.password}
          autoComplete="current-password"
          onChange={this.handleChange("password")}
          margin="normal"
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
