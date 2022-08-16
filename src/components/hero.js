import React from "react";
import groupPhoto from "../img/group.png";

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-image">
                <img src={groupPhoto} alt="experiences-header-image" />
            </div>
            <div className="experiences-text">
                <h1>online experiences</h1>
                <p>
                    Join unique interactive activites led by one-of-a-kind hosts-all without leaving home.
                </p>
            </div>
        </section>
    );
}