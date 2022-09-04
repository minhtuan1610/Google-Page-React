import React from "react";
import './SignInPage.css';
import logo from '../../assets/img/logo.png';
import Img from "../../components/UI/img/Img";
import Input from "../../components/UI/input/Input";
import Button from "../../components/UI/button/Button";

function SignInPage(props) {
    return (
        <div className="mainDiv">
            <Img src={logo}/>
            <h1>Sign in</h1>
            <h3>Continue to Gmail</h3>
            <div className="inputs">
                <div className="Fields">
                    <div className="Fieldset">
                        <Input autoComplete={"off"} className={"Before-FS"} type={"text"} required={""}/>
                        <h1 className="Fs-H"><span>Email or phone</span></h1>
                        <label className="placeholder">Email or phone</label>
                    </div>
                </div>
                <div className="Fields">
                    <div className="Fieldset">
                        <Input className={"Before-FS"} required={""} type={"password"}/>
                        <h1 className="Fs-H"><span>Password</span></h1>
                        <label className="placeholder">Password</label>
                    </div>
                </div>
            </div>
            <Button children={"Login"} handleClick={props.isLoggedIn}/>
        </div>
    );
}

export default SignInPage;