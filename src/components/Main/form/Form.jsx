import React from "react";
import './Form.css';
import searchIcon from '../../../assets/img/search.svg';
import vsIcon from '../../../assets/img/vs.png';
import Input from "../../UI/input/Input";
import Img from "../../UI/img/Img";

const Form = () => {
    return (
        <div>
            <form action=""><br/><br/>
                <div className="s-box">
                    <Img className={"search-icon"} src={searchIcon}/>
                    <label><Input className={"s-input"} type={"text"}/></label>
                    <Img className={"vs-icon"} src={vsIcon}/>
                    <Input className={"s-btn"} type={"submit"} value={"Google Search"}/>
                    <Input className={"s-btn"} type={"submit"} value={"I'm Feeling Lucky"}/>
                </div>
            </form>
        </div>
    );
}
export default Form;