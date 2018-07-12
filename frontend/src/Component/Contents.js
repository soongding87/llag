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
      margin: "2vh",
      padding: "1vh",
      borderStyle: "none",
      borderRadius: "20px",
      boxShadow: '10px 10px 14px -7px rgba(0,0,0,0.61)'
    };

    return (
      <div style={contentsStyle}>
        <Item.Group divided items={this.state.data} />
      </div>
    );
  }
}
