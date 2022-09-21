import React, { Component } from "react";
import GoogleLogin from "./GoogleLogin";

export default class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h2 style={{ fontSize: "35px" }}>Twitter Bot Detector</h2>{" "}
                <GoogleLogin />
            </div>
        );
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
};
