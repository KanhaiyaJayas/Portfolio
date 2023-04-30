import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Kanhaiya</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
 