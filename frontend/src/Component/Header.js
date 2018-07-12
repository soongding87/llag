import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    if (!localStorage.session) {
      return [
        <Menu.Item name="SignUp" href="/signup" key="1" />,
        <Menu.Item name="SignIn" href="/signin" key="2" />
      ];
    } else {
      return [
        <Menu.Item key="3">Welcome {localStorage.session}</Menu.Item>,
        <Menu.Item key="4" name="Contents" href="/contents" />,
        <Menu.Item
          key="5"
          name="SignOut"
          href="/api/logout"
          onClick={this.props.onSignOut}
        />
      ];
    }
  }

  render() {
    if (this.props.auth) {
      localStorage.setItem("session", this.props.auth.username);
    }
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
