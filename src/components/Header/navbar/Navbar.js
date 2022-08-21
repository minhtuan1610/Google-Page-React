import React from "react";
import './Navbar.css';
import gMenu from '../../../assets/img/g-menu.PNG';

const Navbar = () => {
    return (
        <div>
            <a href="#">Gmail</a>
            <a href="#">Images</a>
            <img alt="" src={gMenu}/>
            <button>Sign in</button>
        </div>
    );
}
export default Navbar;