import React, { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import AOS from "aos";
import "./App.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  return (
    <>
      <div id="mySidenav" className="sidenav ">
        <div className="social-link">
          <a href="https://www.linkedin.com/in/j-ranjan-sethy-%F0%9F%87%AE%F0%9F%87%B3-35121a1b1/">
            <FaLinkedinIn id="link1" />
          </a>
        </div>
        <div className="social-link">
          <a href="https://github.com/Jranjangudu/">
            <FaGithub />
          </a>
        </div>
        <div className="social-link">
          {" "}
          <a href="https://www.instagram.com/its_me_gudu_/">
            <FaInstagram id="link2" />
          </a>
        </div>
        <div className="social-link">
          {" "}
          <a href="https://leetcode.com/Gudu/">
            <SiLeetcode id="link3" />
          </a>
        </div>
      </div>
      <Header />

      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
