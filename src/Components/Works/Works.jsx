import React from "react";
import "./Works.css";
import Facebook from "../../img/Facebook.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Fiverr from "../../img/fiverr.png";
import Upwork from "../../img/Upwork.png";
const Works = () => {
  return (
    <>
      <div className="works">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>

          <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        <div className="w-right">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </>
  );
};

export default Works;
