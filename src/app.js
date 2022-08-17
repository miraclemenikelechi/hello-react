import React from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import data from "./data";

const travelData = data.map(function (travel) {
    return <Main
        key={travel.id}
        travel={travel}
    />;
});

console.table(travelData);

export default function App() {
    return (
        <main className="container">
            <Navbar />
            <article className="travels">
                {travelData}
            </article>
        </main>
    );
}