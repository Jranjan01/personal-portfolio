import React from "react";
import "./skills.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import webimg from "../../images/webimage.png";
function Skills() {
  return (
    <header className="container-fluid parent-container ">
      <h3 id="skill" className="text-white">
        Skills
      </h3>
      <div className="skill-container">
        <div className="container main_container">
          <div className="skill_area1">
            <div className="html skill_degine">
              <h4>HTML 5</h4>
            </div>
            <div className="css skill_degine">
              <h4>CSS 3</h4>
            </div>
            <div className="javascript skill_degine">
              <h4>JavaScript</h4>
            </div>
            <div className="python skill_degine">
              <h4>Python</h4>
            </div>
          </div>
          <div className="skill_area2">
            <div className="react skill_degine">
              <h4>React JS</h4>
            </div>
            <div className="nodejs skill_degine">
              <h4>Node JS</h4>
            </div>
            <div className="express skill_degine">
              <h4>Express</h4>
            </div>
            <div className="mongodb skill_degine">
              <h4>MongoDB</h4>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4
          className="text-white text-center"
          style={{ fontFamily: "monospace" }}
        >
          Other skills 👇
        </h4>

        <div className=" py-3 text-center">
          <strong className="text-white" style={{ fontFamily: "revert" }}>
            DS , Algo , Bootstrap , material-ui , Git , Github , Socket.io ,
            Heroku , Netlify
          </strong>
        </div>
      </div>
    </header>
  );
}

export default Skills;

// <div className="center">
//         <div className="skills">
//           <div className="skill-logo">
//             <SiHtml5 style={{ color: "#DD4D25" }} />
//           </div>
//           <h4>html5</h4>
//         </div>
//         <div className="line" id="skill1"></div>

//         <div className="skills">
//           <div className="skill-logo">
//             <SiCss3 className="text-primary" />
//           </div>
//           <h4>Css3</h4>
//         </div>
//         <div className="line" id="skill2"></div>

//         <div className="skills">
//           <div className="skill-logo">
//             <IoLogoJavascript style={{ color: "yellow" }} />
//           </div>
//           <h4 className="mt-2">JavaScript</h4>
//         </div>
//         <div className="line" id="skill3"></div>
//         <div className="skills">
//           <div className="skill-logo">
//             <SiReact style={{ color: "blue" }} />
//           </div>
//           <h4>React JS</h4>
//         </div>
//         <div className="line" id="skill4"></div>

//         <div className="skills">
//           <div className="skill-logo">
//             <FaNodeJs style={{ color: "green" }} />
//           </div>
//           <h4>Node JS</h4>
//         </div>
//         <div className="line" id="skill5"></div>

//         <div className="skills">
//           <div className="skill-logo">
//             <img src={express} alt=".." width="25px" className="text-white" />
//           </div>
//           <h4>Express</h4>
//         </div>
//         <div className="line" id="skill7"></div>
//         <div className="skills">
//           <div className="skill-logo">
//             <SiPython style={{ color: "green" }} />
//           </div>
//           <h4>Python</h4>
//         </div>
//         <div className="line" id="skill8"></div>
//         <div className="skills">
//           <div className="skill-logo">
//             <SiMongodb style={{ color: "green" }} />
//           </div>
//           <h4>MongoDB</h4>
//         </div>
//         <div className="line" id="skill7"></div>
//       </div>
//       <div className="other-skills">
//         <h4 className="text-white">Other skills 👇</h4>

//         <div className="skill-wrapper">
//           <h6>Bootstrap , material-ui , Git , Github , Heroku , Netlify</h6>
//         </div>
//       </div>
