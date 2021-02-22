import React from "react";
import "./skills.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import express from "../../images/express.png";
function Skills() {
  return (
    <header className="container-fluid skill-container ">
      <h3 id="skill" className="text-white">
        Skills
      </h3>

      <div className="center">
        <div className="skills">
          <div className="skill-logo">
            <SiHtml5 style={{ color: "#DD4D25" }} />
          </div>
          <h4>html5</h4>
        </div>
        <div className="line" id="skill1"></div>

        <div className="skills">
          <div className="skill-logo">
            <SiCss3 className="text-primary" />
          </div>
          <h4>Css3</h4>
        </div>
        <div className="line" id="skill2"></div>

        <div className="skills">
          <div className="skill-logo">
            <IoLogoJavascript style={{ color: "yellow" }} />
          </div>
          <h4 className="mt-2">JavaScript</h4>
        </div>
        <div className="line" id="skill3"></div>
        <div className="skills">
          <div className="skill-logo">
            <SiReact style={{ color: "blue" }} />
          </div>
          <h4>React JS</h4>
        </div>
        <div className="line" id="skill4"></div>

        <div className="skills">
          <div className="skill-logo">
            <FaNodeJs style={{ color: "green" }} />
          </div>
          <h4>Node JS</h4>
        </div>
        <div className="line" id="skill5"></div>

        <div className="skills">
          <div className="skill-logo">
            <img src={express} alt=".." width="25px" className="text-white" />
          </div>
          <h4>Express</h4>
        </div>
        <div className="line" id="skill7"></div>
        <div className="skills">
          <div className="skill-logo">
            <SiPython style={{ color: "green" }} />
          </div>
          <h4>Python</h4>
        </div>
        <div className="line" id="skill8"></div>
        <div className="skills">
          <div className="skill-logo">
            <SiMongodb style={{ color: "green" }} />
          </div>
          <h4>MongoDB</h4>
        </div>
        <div className="line" id="skill7"></div>
      </div>
      <div className="other-skills">
        <h4 className="text-white">Other skills 👇</h4>

        <div className="skill-wrapper">
          <h6>Bootstrap , material-ui , Git , Github , Heroku , Netlify</h6>
        </div>
      </div>
    </header>
  );
}

export default Skills;
