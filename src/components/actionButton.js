import React, { Component } from "react";

import { connect } from "react-redux";

class EatButton extends Component {
    handleClick() {
        this.props.action;
    }
    render() {
        return <button onClick={() => this.handleClick()}>this.actionName</button>;
    }
}

export default connect(
    null,
    { this.props.action }
)(EatButton);