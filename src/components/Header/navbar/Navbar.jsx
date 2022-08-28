import React from "react";
import './Navbar.css';
import gMenu from '../../../assets/img/g-menu.PNG';
import Button from "../../UI/button/Button";
import A from "../../UI/a/A";
import Img from "../../UI/img/Img";

const Navbar = (props) => {
    return (
        <div className="n-wrapper">
            <A label={"Gmail"}/>
            <A label={"Images"}/>
            <Img src={gMenu}/>
            <Button label={"Sign in"} handleClick={props.transitPage}/>
        </div>
    );
}
export default Navbar;