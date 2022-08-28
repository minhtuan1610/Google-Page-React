import React from "react";
import './Img.css';

const Img = ({alt, className, src}) => {
    return (
        <img alt={alt} className={className} src={src}/>
    );
}
export default Img;