import React from "react";
import './A.css';

function A({label, href}) {
    return (
        <a href={href}>{label}</a>
    );
}

export default A;