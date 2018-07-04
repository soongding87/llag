import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return [
          <Menu.Item
            name="SignUp"
            href="/signup"
            key='1'
          />,
          <Menu.Item
            name="SignIn"
            href="/signin"
            key='2'
          />
        ];
      default:
        return [
          <Menu.Item
            key="1"
            name="contents"
            href="/contents"
          />,
          <a href="/api/logout">logout</a>
        ]
    }
  }

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
