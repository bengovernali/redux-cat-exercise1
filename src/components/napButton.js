import React, { Component } from "react";

import { connect } from "react-redux";
import { actionNap } from "../redux/actions";

class NapButton extends Component {
  handleClick() {
    actionNap();
  }
  render() {
    return <button onClick={() => this.handleClick()}>Nap</button>;
  }
}

export default connect(
  null,
  { actionNap }
)(NapButton);
