import React from "react";
import './Input.css';

function Input({className, type, value, placeholder, onChange}) {
    return (
        <input onChange={onChange} className={className} type={type} value={value} placeholder={placeholder}/>
    );

}

export default Input;