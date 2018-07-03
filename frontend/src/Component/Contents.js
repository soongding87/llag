import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import { data } from "../sample/data";

export default class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    const contentsStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5vh"
    };

    return (
      <div style={contentsStyle}>
        <Item.Group items={this.state.data} />
      </div>
    );
  }
}
