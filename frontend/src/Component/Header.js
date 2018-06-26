import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Menu secondary size="massive">
          <Menu.Item header>LLAG </Menu.Item>
          <Menu.Item name="home" href="/" />
          <Menu.Item name="SignUp" href="/signup" />
          <Menu.Item name="SignIn" href="/login" />
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
