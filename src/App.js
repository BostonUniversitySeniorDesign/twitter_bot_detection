import "./App.css";
import APIInput from "./Components/APIInput";
import Header from "./Components/Header";

function App() {
    return (
        <div style={mainContainerStyle}>
            <Header></Header>
            <APIInput onAPISuccess={showInfo} />
        </div>
    );
}

function showInfo() {}

const mainContainerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
    boxSizing: "border-box",
};

export default App;
