import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
        <div className="toggle">
            <Moon/>
            <Sun/>
            <div className="t-button" onClick={() => {theme.dispatch({type: "toggle"})}} style={darkMode ? {left: "2px"} : {right: '2px'}}>

            </div>
        </div>
        </>
    )
}

export default Toggle;