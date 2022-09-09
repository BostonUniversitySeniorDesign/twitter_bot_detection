import React, { Component } from "react";

export default class APIInput extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-15vh",
                }}
            >
                <input type="text" style={inputStyle} placeholder="@example" />
                <button type="Submit" style={buttonStyle}>
                    Submit
                </button>
            </div>
        );
    }
}

const inputStyle = {
    width: "30vw",
    height: "2rem",
    borderRadius: "6px",
    outline: "none",
    border: "solid 2px #333",
    fontSize: "1.25rem",
};

const buttonStyle = {
    width: "6rem",
    height: "2rem",
    borderRadius: "6px",
    fontSize: "1.25rem",
    outline: "none",
    border: "solid 2px #333",
    marginLeft: "1rem",
};
