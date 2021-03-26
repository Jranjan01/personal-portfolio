import React from "react";
import "./Header.css";
import developer from "../../images/developer.png";
import { Link } from "react-scroll";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="name-wrapper">
          <h1>Hi, I'm Jnana Ranjan Sethy,</h1>
          <p className="text-white my_info">I'm a Full-Stack Developer</p>
        </div>
        <div className="intro-wrapper">
          <div className="nav-wrapper ">
            <div class="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>

            <ul id="navigation">
              <Link to="contact" smooth={true} duration={1000}>
                <strong id="nav-item"> Contact</strong>
              </Link>
              <Link to="skill" smooth={true} duration={1000}>
                <strong id="nav-item"> Skills</strong>
              </Link>
              <Link to="project" smooth={true} duration={1000}>
                <strong id="nav-item"> Project</strong>
              </Link>
            </ul>
          </div>
          <div className="center-area ">
            <div className="left-column">
              <img src={developer} alt="..." id="profile_pic" />
              {/* <h5>MERN stack Developer</h5> */}
            </div>
            <div className="right-column ">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>What I'm Doing</h3>
                  <p> I'm an Engineer by profession & a Web Developer</p>
                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
