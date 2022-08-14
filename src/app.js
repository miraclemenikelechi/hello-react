import React from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";

export default function App() {
    return (
        <section className="container">
            <Navbar />
            <Main />
        </section>
    );
}