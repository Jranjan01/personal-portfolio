import React from "react";
import "./project.css";
import imageuploader from "../../images/imageuploader.png";
import ecommerce from "../../images/ecommerce.png";
import covid191 from "../../images/covid19-1.png";
import library from "../../images/library.jpg";
import weather from "../../images/weather2.png";

import { Link } from "react-router-dom";

function Project() {
  return (
    <header className="project-wrapper container-fluid">
      <div className="container">
        <h2 id="project" className="text-white">
          {" "}
          Projects
        </h2>
        <div className="post-wrapper">
          <div>
            <div className="post">
              <img className="thumbnail" src={imageuploader} alt=".." />
              <div className="post-preview">
                <h6 className="post-title">Image Uploader </h6>
                <small>&#8618; Jan 2021 – Feb 2021</small>
                <p className="post-intro">
                  A fully User Authentication Web Application Developed on{" "}
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    MERN stack
                  </span>{" "}
                  (MongoDB, Express, Reactjs, Nodejs) ,
                </p>
                <Link to="/imageuploader" className="read-more">
                  Read More
                </Link>

                <a
                  href="https://mren-imageupload-app.netlify.app/"
                  target="_blank"
                  className="seelive"
                >
                  See Live
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img className="thumbnail" src={ecommerce} alt=".." />

              <div className="post-preview">
                <h6 className="post-title">E-Commerce </h6>
                <small>&#8618; Nov 2020</small>
                <p className="post-intro">
                  It’s a Rasponsive website developed on{" "}
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    React JS, React Router & React Hooks{" "}
                  </span>{" "}
                  , Bootstrap4,
                </p>
                <Link to="/ecommerce" className="read-more">
                  Read More
                </Link>

                <a
                  href="https://jranjangudu.github.io/Titaniumsite/"
                  className="seelive"
                  target="_blank"
                >
                  See Live
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="post">
              <img className="thumbnail" src={covid191} alt=".." />

              <div className="post-preview">
                <h6 className="post-title">Covid-19 Tracker</h6>
                <small>&#8618; Dec 2020</small>
                <p className="post-intro">
                  This covid-19 Tracker website developed on{" "}
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    React JS, Chart JS
                  </span>
                  ...
                </p>
                <Link to="/covid19" className="read-more">
                  Read More
                </Link>
                <a
                  href="https://jranjangudu.github.io/Covid-19-Tracker/"
                  className="seelive"
                  target="_blank"
                >
                  See Live
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img className="thumbnail" src={weather} alt=".." />
              <div className="post-preview">
                <h6 className="post-title">Weather Website</h6>
                <small>&#8618; Dec 2020</small>
                <p className="post-intro">
                  A basic current weather website , developed on Reactjs ,
                  bootstrap & Api !
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    ReactJS , APIs
                  </span>{" "}
                  & bootstrap !! ...
                </p>
                <Link to="/weather" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img className="thumbnail" src={library} alt=".." />
              <div className="post-preview">
                <h6 className="post-title">library Management System</h6>
                <small>&#8618; Oct 2020</small>
                <p className="post-intro">
                  It's a web application developed on{" "}
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                    }}
                  >
                    Javascript
                  </span>
                  , Bootstrap and Cookies !!
                </p>
                <Link to="/librarymang" className="read-more">
                  Read More
                </Link>
                <a
                  href="https://jranjangudu.github.io/Library-management/"
                  className="seelive"
                  target="_blank"
                >
                  See Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Project;
