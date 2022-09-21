import React from "react";

function Info({ item }) {
    try {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "baseline",
                    flexDirection: "column",
                    marginTop: "10px",
                    width: "30%",
                }}
            >
                <div>
                    <div style={{ fontSize: "50px" }}>{item.screen_name}</div>
                    <div>User ID: {item.user_id}</div>
                    <div>Number of Followers: {item.followers}</div>
                    <div>Last Updated: {item.lastupdate}</div>
                    <div>Friends: {item.friends}</div>
                    <div>Country: {item.country}</div>
                </div>
            </div>
        );
    } catch {
        return "";
    }
}

export default Info;
