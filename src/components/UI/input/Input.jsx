import React from "react";
import './Input.css';

function Input({className, type, value}) {
    return (
        <input className={className} type={type} value={value}/>
    );

}

export default Input;