import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";

export default function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Card/>
        </main>
    );
}