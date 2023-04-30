import React from "react";
import "./Floating.css";
const FloatingDiv = ({image , text1 , txt2}) => {
    return (
        <>
        <div className="floatingDiv">
            <img src={image} alt=""/>
            <span>
                {text1}
                <br/>
                {txt2}
            </span>
        </div>
        </>
    )
}

export default FloatingDiv;