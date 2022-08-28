import React from "react";
import './Links.css';
import A from "../../UI/a/A";

const Links = () => {
    return (
        <div className="links">
            <div className="link-1">
                <A label={"About"}/>
                <A label={"Advertising"}/>
                <A label={"Business"}/>
                <A label={"How Search works"}/>
            </div>
            <div className="link-2">
                <A label={"Privacy"}/>
                <A label={"Terms"}/>
                <A label={"Settings"}/>
            </div>
        </div>
    );
}
export default Links;