import React from "react";
import globe from "../images/globe.png"
export default function Navbar() {
    return (
        <div className="Nav">
            <img src={globe} alt="globe Image" className="globe" />
            <p>My Travel Journal</p>
        </div>
    )

}