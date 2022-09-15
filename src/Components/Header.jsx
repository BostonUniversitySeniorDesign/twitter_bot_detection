import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return <div style={headerStyle}>Twitter Bot Detector</div>;
    }
}

const headerStyle = {
    position: "fixed",
    width: "100vw",
    height: "50px",
    backgroundColor: "#1da1f2",
    textAlign: "left",
    top: 0,
    left: 0,
    fontSize: "2.5rem",
    padding: "0 20px",
};
