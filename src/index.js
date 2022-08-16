import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.js";

const
    root = ReactDOM.createRoot(document.querySelector('#root'));

function renderApp() {
    return (
        <>
            <App />
        </>
    );
}


root.render(renderApp());