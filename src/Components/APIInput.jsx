import React from "react";
export default function APIInput({ props }) {
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
            <button type="Submit" style={buttonStyle} onClick={requestData}>
                Submit
            </button>
        </div>
    );
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

function requestData() {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "676df54b3dmsh53c02a46eb496b5p17c4f4jsn876df78779fb",
            "X-RapidAPI-Host": "peerreach.p.rapidapi.com",
        },
    };

    const data = fetch(
        "https://peerreach.p.rapidapi.com/user/lookup.json?screen_name=fredwilson",
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

    console.log(data);
    this.props.onAPISuccess(data);
}
