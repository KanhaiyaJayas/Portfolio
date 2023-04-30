import React from "react";
import './Card.css'
const Card = ({emoji , heading , detail}) => {
    return (
        <>
        <div className="card">
            <img src={emoji} alt="" style={{height: "60%"}}/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">Learn More</button>
        </div>
        </>
    )
}

export default Card;