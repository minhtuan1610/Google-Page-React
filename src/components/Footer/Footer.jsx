import React from "react";
import './Footer.css';
import Location from "./location/Location";
import Links from "./links/Links";

function Footer() {
    return (
        <div className="footer">
            <Location/>
            <Links/>
        </div>
    );
}

export default Footer;