import React from "react";
import './I18N.css';
import A from "../../UI/a/A";

const I18N = () => {
    return (
        <div className="lang">
            Google offered in:
            <A label={"Tiếng Việt"}/>
            <A label={'Fran{&ccedil;}ais'}/>
        </div>
    );
}
export default I18N;