import React, { Component } from "react";

import { connect } from "react-redux";
import { actionEat } from "../redux/actions";

class EatButton extends Component {
  handleClick() {
    actionEat();
  }
  render() {
    return <button onClick={() => this.handleClick()}>Eat</button>;
  }
}

export default connect(
  null,
  { actionEat }
)(EatButton);
