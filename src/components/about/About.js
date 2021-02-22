import React from "react";
import "./about.css";
import myinfo from "../../images/myinfo.png";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import resume from "../../images/resume.pdf";
function About() {
  return (
    <header className=" main-container">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>
              &#9763; &#8460;ello , i am{" "}
              <span className="text-info">&#74;NANA RANJAN SETHY</span> & I'm an
              Engineer by profession and a{" "}
              <span className="text-info">WEB DEVELOPER</span> (MERN Stack
              developer)
            </p>
            <p>
              Presently i am Pursuring my Graduation from Raajdhani Engineering
              college(BBSR) , Apart from my curriculum i have done many project
              on Web development,
            </p>
            <p>
              Apart from study i am pretty much interested to watching hacking /
              Technology related movies
            </p>
            <div className="break"></div>
            <p>
              Fullstack developer with primary focus on{" "}
              <span className="text-info">MERN Stack</span> (MongoDB , Express ,
              ReactJS , NodeJS)
            </p>
            <a href={resume} target="_blank">
              <button className="button">Resume &#8594;</button>
            </a>
          </div>
          <div className="social-links">
            <a href={myinfo} target="_blank">
              <img
                src={myinfo}
                className="img-fluid"
                alt="..."
                id="social-img"
              />
            </a>

            <h3 id="find-me" className="text-white">
              Find Me 👇
            </h3>
            <div id="social-link">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/j-ranjan-sethy-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/">
                  <FaLinkedinIn id="link1" />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Jranjangudu/">
                  <FaGithub />
                </a>
              </div>
              <div className="social-links">
                {" "}
                <a href="https://www.instagram.com/its_me_gudu_/">
                  <FaInstagram id="link2" />
                </a>
              </div>
            </div>

            <p
              className="pt-2 text-white"
              style={{ fontFamily: "monospace", fontSize: "16px" }}
            >
              &#9993; jnana.ranjan408@gmail.com
            </p>
            <p
              className=" text-white"
              style={{ fontFamily: "monospace", fontSize: "14px" }}
            >
              &#9990; Contact :- +91 8114994487
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default About;
