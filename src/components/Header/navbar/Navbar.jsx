import React from "react";
import './Navbar.css';
import gMenu from '../../UI/img/g-menu.PNG';

const Navbar = (props) => {
    return (
        <div className="n-wrapper">
            <a href="#">Gmail</a>
            <a href="#">Images</a>
            <img alt="" src={gMenu}/>
            <button onClick={props.transitPage}>Sign in</button>
        </div>
    );
}
export default Navbar;