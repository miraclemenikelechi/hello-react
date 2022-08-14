import React from "react";
import Info from "./info";
import About from "./about";
import Interests from "./intrests";

export default function Main() {
    return (
        <section className="main-container">
            <Info />
            <div className="sample-text">
                <About />
                <Interests />
            </div>
        </section>
    );
}