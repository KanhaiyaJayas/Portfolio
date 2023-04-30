import React from "react";
import "./intro.css";
import Github from "../../../img/github.png";
import LinkedIn from "../../../img/linkedin.png";
import Instagram from "../../../img/instagram.png";
import Vector1 from "../../../img/Vector1.png";
import Vector2 from "../../../img/Vector2.png";
import boy from "../../../img/boy.png";
import thumbup from "../../../img/thumbup.png";
import Crown from "../../../img/crown.png";
import glassesimoji from "../../../img/glassesimoji.png";
import FloatingDiv from "../../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = {duration: 2 , type: 'spring'};
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hii! I am</span>
            <span>Kanhaiya Singh</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <button className="button i-button">Hire Me</button>
          <div className="i-icons">
            <a href="">
              <img src={Github} />
            </a>
            <a href="">
              <img src={LinkedIn} />
            </a>
            <a href="">
              <img src={Instagram} />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} />
          <img src={Vector2} />
          <img src={boy} />
          <motion.img initial={{left: '-36%'}} whileInView={{left: "-24%"}}  transition={transition} src={glassesimoji} />
          <motion.div initial={{left: '-4%'}} whileInView={{left: "68%"}}  transition={transition} style={{ top: "-4%", left: "68%" }}>
            <FloatingDiv image={Crown} text1="Web" txt2="Developer" />
          </motion.div>
          <motion.div initial={{left: '9rem'}} whileInView={{left: "1rem"}}  transition={transition}  style={{ top: "18rem", left: "4rem" }}>
            <FloatingDiv image={thumbup} text1="Best Design" txt2="Award" />
          </motion.div>
          {/* blur divs */}
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div className="blur" style={{ background: "#C1F5FF" , top: "17rem" , width: "21rem" , height: "11rem" , left: "-9rem"}}></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
