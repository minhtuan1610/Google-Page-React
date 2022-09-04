import React from "react";
import './Navbar.css';
import gMenu from '../../../assets/img/g-menu.PNG';
import Button from "../../UI/button/Button";
import A from "../../UI/a/A";
import Img from "../../UI/img/Img";
// import avatar from '../../../assets/img/avatar.jpg';

const Navbar = (props) => {
    return (
        <div className="n-wrapper">
            <A label={"Gmail"}/>
            <A label={"Images"}/>
            <Img src={gMenu}/>
            {
                (props.isLoggedIn === true) ? <Button children={"Logged in"} handleClick={props.isLoggedOut}/> :
                    <Button children={"Sign in"} handleClick={props.goLoginPage}/>
            }
        </div>
    );
}
export default Navbar;