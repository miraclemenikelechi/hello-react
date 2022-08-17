import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function Main(props) {
    return (
        <section className="travel-container">
            <div className="travel-image">
                <img src={require(`../img/${props.travel.imageUrl}`)} alt="" />
            </div>
            <div className="travel-info">
                <div className="travel-country">
                    <MdLocationOn color="F55A5A" />
                    <span>{props.travel.location}</span>
                    <span><a href={props.travel.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <div className="travel-location">
                    <h2>{props.travel.title}</h2>
                </div>
                <div className="travel-dates">
                    <span>{props.travel.startDate}</span> - <span>{props.travel.endDate}</span>
                </div>
                <div className="travel-description">
                    <p>{props.travel.description}</p>
                </div>
            </div>
        </section>
    );
}