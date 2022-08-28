import React from "react";
import './Links.css';

const Links = () => {
    return (
        <div className="links">
            <div className="link-1">
                <a href="#">About</a>
                <a href="#">Advertising</a>
                <a href="#">Business</a>
                <a href="#">How Search works</a>
            </div>
            <div className="link-2">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Settings</a>
            </div>
        </div>
    );
}
export default Links;