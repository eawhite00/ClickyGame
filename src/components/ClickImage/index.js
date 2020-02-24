import React from "react";
import "./style.css";

function ClickImage(props) {
    return (
        <div
        style={{ backgroundImage: `url("${props.image}")` }}
        className="click-image"
        onClick={props.clickHandler}
        />
    );
}

export default ClickImage