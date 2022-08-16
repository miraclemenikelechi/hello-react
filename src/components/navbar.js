import React from "react";
import logo from "../img/airbnb.png";

export default function Navbar() {
    return (
        <nav className="navigation">
            <img src={logo} alt="logo" />
        </nav>
    );
}