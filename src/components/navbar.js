import React from "react";
import logo from "../img/logo.png";

export default function Navbar() {
    return (
        <nav className="navigation">
            <img src={logo} alt="react logo" />
            <h1>ReactFacts</h1>
            <h3>React Course - Project 1</h3>
        </nav>
    );
}