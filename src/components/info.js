import React from "react";
import { HiMail } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";

export default function Info() {
    return (
        <section className="basic-info">
            <div>
                <h1 className="full-name">
                    miracle k emenike
                </h1>
                <h4 className="work-role">
                    back-end developer
                </h4>
                <h6 className="website">
                    miraclemenikelechi.github.com
                </h6>
            </div>

            <div className="contact">
                <button><span><HiMail size={"1.7rem"} /></span>email</button>
                <button><span><FaTwitter size={"1.7rem"} color="FFFFFF"/></span>twitter</button>
            </div>
        </section>
    );
}