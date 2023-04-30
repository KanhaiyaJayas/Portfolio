import React from "react";
import "./Services.css";
import ResponsivenessImage from "../../img/Responsiveness.svg";
import MaintenanceImage from "../../img/Maintainance.svg";
import PerformanceImage from "../../img/Performance.svg";

import Card from "../Card/Card";
import Resume from "../Resume.pdf";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <>
      <div className="services">
        <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="cards">
          <motion.div
            style={{ left: "14rem" }}
            initial={{ left: "14rem" }}
            whileInView={{ left: "25rem" }}
            transition={transition}
          >
            <Card
              emoji={ResponsivenessImage}
              heading={"Responsiveness"}
              detail={"Figma, Sketch, Photoshop, Adobe, Adboe xd"}
            />
          </motion.div>
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={MaintenanceImage}
              heading={"Responsiveness"}
              detail={"Figma, Sketch, Photoshop, Adobe, Adboe xd"}
            />
          </motion.div>
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={PerformanceImage}
              heading={"Responsiveness"}
              detail={"Figma, Sketch, Photoshop, Adobe, Adboe xd"}
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
