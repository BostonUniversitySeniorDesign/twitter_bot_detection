import React from "react";

export default function Timestamp(props) {
    const date = new Date();
    return (<div style={dateStyle}>Last Reloaded: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</div>);
}

const dateStyle = {
    position: "absolute",
    bottom: '5px',
    right: '5px',
    color: '#333'
}