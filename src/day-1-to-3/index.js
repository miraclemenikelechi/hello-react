import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyFirstReactHEADER from "./header";
import MainContent from "./mainicontainer";
import MyFirstReactFOOTER from "./footer";

const
    root = ReactDOM.createRoot(document.querySelector('#root')),

    MyFirstReact = () => {
        return (
            <section className="main">
                <MyFirstReactHEADER />
                <MainContent />
                <MyFirstReactFOOTER />
            </section>
        );
    };


root.render(MyFirstReact());
// root.render(<MyFirstReactHEADER />);