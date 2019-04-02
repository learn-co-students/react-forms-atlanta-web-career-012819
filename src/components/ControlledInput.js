// Code ControlledInput Component Here
import React, { Component } from "react";

class ControlledInput extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit"/>
      </form>
    )
  }
}

export default ControlledInput;
