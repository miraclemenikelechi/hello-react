import React from "react";

export default function Navbar() {
    return (
        <nav className="navigation">
            <img src={require("../img/logo.png")} alt="" />
            <p>my travel journal</p>
        </nav>
    );
}