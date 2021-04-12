import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import myinfo from "../../images/myinfo.png";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiCurrentLocation } from "react-icons/bi";
import resume from "../../images/resume.pdf";

function About() {
  // useEffect For animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  return (
    <header className=" main-container ">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-me" data-aos="fade-up">
            <h4 className="more_about">More about me</h4>
            <p className="p">
              Hello , i am
              <span className="text-info"> &#74;NANA RANJAN SETHY </span> & I'm
              an Engineer by profession and a
              <span className="text-info"> WEB DEVELOPER </span> (MERN Stack
              developer)
            </p>
            <p>
              &#187; Presently i am Pursuring my Graduation from Raajdhani
              Engineering college(BBSR) ,
            </p>
            <p>
              &#187; Apart from my curriculum i have done many project on Web
              development,
            </p>
            <p>
              &#187; Apart from study i am pretty much interested to watching
              hacking / Technology related movies
            </p>
            <p>
              &#187; My strength is , i'm honest , self motivated and hardworing
              person with positive attitude towards my career & life
            </p>

            <div className="break my-2"></div>
            <p>
              &#187; Fullstack developer with primary focus on{" "}
              <span className="text-info">MERN Stack</span> (MongoDB , Express ,
              ReactJS , NodeJS)
            </p>

            <div className="pt-3">
              <a href={resume} target="_blank">
                <button className="button">
                  {" "}
                  <p className="resume">Resume &#8594;</p>
                </button>
              </a>
            </div>
          </div>
          <div className="social-links" data-aos="fade-down">
            <a href={myinfo} target="_blank">
              <img
                src={myinfo}
                className="img-fluid mySlides"
                alt="..."
                id="social-img"
              />
            </a>
            <div
              className="find_me_container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <h3 id="find-me" className="text-white">
                Find Me 👇
              </h3>
              <address>
                <div id="social-link">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/j-ranjan-sethy-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/">
                        <FaLinkedinIn className="link linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Jranjangudu/">
                        <FaGithub className="link github" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/its_me_gudu_/">
                        <FaInstagram className="link instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://leetcode.com/Gudu/">
                        <SiLeetcode className="link leetcode" />
                      </a>
                    </li>
                  </ul>

                  {/* <div className="social-links">
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

                  <div className="social-links">
                    {" "}
                    <a href="https://leetcode.com/Gudu/">
                      <SiLeetcode id="link3" />
                    </a>
                  </div> */}
                </div>

                <p
                  className="pt-2 text-white"
                  style={{ fontFamily: "monospace", fontSize: "16px" }}
                >
                  &#9993;
                  <a href="mailto:jnana.ranjan408@gmail.com">Send Email</a>
                  <p
                    className="mt-2 text-white"
                    style={{ fontFamily: "monospace", fontSize: "14px" }}
                  >
                    {" "}
                    &#9993; jnana.ranjan408@gmail.com
                  </p>
                </p>
                <p
                  className=" text-white"
                  style={{ fontFamily: "monospace", fontSize: "14px" }}
                >
                  &#9990; Contact :- +91 8114994487
                </p>

                <address
                  className="text-white "
                  style={{ fontFamily: "monospace", fontSize: "14px" }}
                >
                  <BiCurrentLocation /> Address:-
                  <span className="px-3">Jagatsinghpur , Odisha</span>
                </address>
              </address>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default About;
