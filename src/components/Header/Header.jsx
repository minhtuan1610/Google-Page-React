import React from "react";
import './Header.css';
import Navbar from './navbar/Navbar';

function Header(props) {
    return (
        <Navbar {...props}/>
    );
}

export default Header;