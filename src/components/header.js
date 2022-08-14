import React from "react";
import headerPicture from "../img/12189061.jpg";

export default function Header() {
    return (
        <section>
            <div className="top-photo">
            <img src={headerPicture} alt="" />
            </div>
        </section>
    );
}