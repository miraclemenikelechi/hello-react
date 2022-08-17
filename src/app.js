import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import data from "./data";

const pageData = data.map(function (info) {
    // console.log(info.openSpots)
    return <Card
        key={info.id}
        info={info}
    />;
});

export default function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <section className="cards-section">
                {pageData}
            </section>
        </main>
    );
}