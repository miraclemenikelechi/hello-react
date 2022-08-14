import React from "react";
import {
    FaTwitterSquare,
    FaGithubSquare,
    FaFacebookSquare,
    FaInstagramSquare
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div>
                <FaTwitterSquare size="2rem" color="918E9B" />
            </div>
            <div>
                <FaFacebookSquare size="2rem" color="918E9B" />
            </div>
            <div>
                <FaInstagramSquare size="2rem" color="918E9B" />
            </div>
            <div>
                <FaGithubSquare size="2rem" color="918E9B" />
            </div>
        </footer>
    );
}