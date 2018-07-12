import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    if(this.props.authenticated) {
      return [
        <Menu.Item key="3">Welcome </Menu.Item>,
        <Menu.Item key="4" name="Contents" href="/contents" />,
        <Menu.Item key="5" name="SignOut" href="/signout" />
      ];

      } else {
        return [
          <Menu.Item name="SignUp" href="/signup" key="1" />,
          <Menu.Item name="SignIn" href="/signin" key="2" />
        ];
            }

  }

  render() {
    return (
      <div>
        <Menu secondary size="massive">
          <Menu.Item header>LLAG </Menu.Item>
          <Menu.Item name="home" href="/" />
          {this.renderContent()}
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


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    auth: state.auth
   };
}

export default connect(mapStateToProps)(Header);
