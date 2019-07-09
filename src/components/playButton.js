import React, { Component } from "react";

import { connect } from "react-redux";
import { actionPlay } from "../redux/actions";

class PlayButton extends Component {
  handleClick() {
    actionPlay();
  }

  render() {
    return <button onClick={() => this.handleClick()}>Play</button>;
  }
}

export default connect(
  null,
  { actionPlay }
)(PlayButton);
