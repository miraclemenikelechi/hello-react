import React from "react";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
    return (
        <section className="container">
            <Header />
            <Main />
            <Footer />
        </section>
    );
}