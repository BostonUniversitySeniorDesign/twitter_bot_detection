import "./App.css";
import APIInput from "./Components/APIInput";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Title from "./Components/Title";
import firebase from "./Firebase";
import { useState } from "react";

function App() {
    const [twitterData, setTwitterData] = useState(undefined);

    return (
        <div style={mainContainerStyle}>
            <Header></Header>
            <Title></Title>
            <APIInput
                onAPISuccess={(data) => {
                    setTwitterData(data);
                }}
            />
            <Info item={twitterData}></Info>
        </div>
    );
}

const mainContainerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    boxSizing: "border-box",
    background: "#E1E8ED",
};

export default App;
