import React from "react";
import './Main.css';
import Img from '../UI/img/Img';
import Form from './form/Form';
import I18N from './i18n/I18N';
import logo from '../../assets/img/logo.png';

function Main() {
    return (
        <div className="main">
            <Img className={"logo"} src={logo}/>
            <Form/>
            <I18N/>
        </div>
    );
}

export default Main;