import React from "react";
import './Form.css';
import searchIcon from '../../UI/img/search.svg'
import vsIcon from '../../UI/img/vs.png'

const Form = () => {
    return (
        <div>
            <form action=""><br/><br/>
                <div className="s-box">
                    <img alt="" className="search-icon" src={searchIcon}/>
                    <label><input className="s-input" type="text"/></label>
                    <img alt="" className="vs-icon" src={vsIcon}/>
                    <input className="s-btn" type="submit" value="Google Search"/>
                    <input className="s-btn" type="submit" value="I'm Feeling Lucky"/>
                </div>
            </form>
        </div>
    );
}
export default Form;