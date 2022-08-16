import React from "react";
import zaferes from "../img/zaferes.png";
import star from "../img/Star.png";

export default function Card() {
    return (
        <section className="cards-section">
            <div className="card-container">
                <div className="card-image">
                    <img src={zaferes} alt="" />
                </div>
                <div className="card-info">
                    <h4 className="card-info-rating">
                        <img src={star} /> <span>5.0</span> (6) • usa
                    </h4>
                    <p className="card-info-name">
                        Life lessons with Katie Zaferes
                    </p>
                    <p className="card-info-pricing">
                        <span>From $136</span> / person
                    </p>
                </div>
            </div>
        </section>
    );
}