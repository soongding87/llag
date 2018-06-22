import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class App extends Component {
  constructor(props) {
    super();
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className="icon" color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                LLAG
              </Typography>
              <Button color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
