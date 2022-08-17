import React from "react";

export default function Card(props) {
    let badge;
    if (props.info.openSpots === 0) {
        badge = "sold out";
    } else if (props.info.country === "Online") {
        badge = "online";
    }
    console.log(props.info.stats.rating);
    return (
        <section>
            <div className="card-container">
                {badge && <div className="card-status">{badge}</div>}
                <div className="card-image">
                    <img src={require(`../img/${props.info.coverImg}`)} alt="" />
                </div>
                <div className="card-info">
                    <h4 className="card-info-rating">
                        <img src={require("../img/Star.png")} /> <span>{props.info.stats.rating}</span> ({props.info.stats.reviewCount}) • {props.info.location}
                    </h4>
                    <p className="card-info-name">
                        {props.info.title}
                    </p>
                    <p className="card-info-pricing">
                        <span>From ${props.info.price}</span> / person
                    </p>
                </div>
            </div>
        </section>
    );
}