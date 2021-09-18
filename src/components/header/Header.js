import React, { useEffect } from "react";
import "./Header.css";
import developer from "../../images/developer.png";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";
function Header() {
  // useEffect For animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="name-wrapper">
          <h1>Hi, I'm J Ranjan Sethy</h1>
          <p className="text-white my_info typing_text">
            I'm a
            <Typical
              steps={[
                "Web developer",
                1200,
                "Full-stack developer",
                1400,
                "Mern stack developer",
                1600,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
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
              <div className="image_wrapper">
                {" "}
                <img src={developer} alt="..." id="profile_pic" />
              </div>
              {/* <h5>MERN stack Developer</h5> */}
            </div>
            <div className="right-column " data-aos="zoom-out-down">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>Who I am ?</h3>

                  <p>
                    {" "}
                    <marquee
                      width="100%"
                      direction="left"
                      height="auto"
                      scrollamount="10"
                    >
                      I'm an Engineer by profession &
                    </marquee>
                    <marquee
                      width="100%"
                      direction="right"
                      height="auto"
                      scrollamount="10"
                    >
                      a Full-stack developer ( Mern-stack )
                    </marquee>
                  </p>
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
