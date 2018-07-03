import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Header extends Component {


  render() {
    console.log(this.props.auth)
    return (
      <div>
        <Menu secondary size="massive">
          <Menu.Item header>LLAG </Menu.Item>
          <Menu.Item
            name="home"
            href="/"
          />
          <Menu.Item
            name="SignUp"
            href="/signup"
          />
          <Menu.Item
            name="SignIn"
            href="/signin"
          />
          <Menu.Item
            name="contents"
            href="/contents"
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
