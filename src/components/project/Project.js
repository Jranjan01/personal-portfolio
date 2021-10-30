import React, { useEffect } from "react";
import "./project.css";
import imageuploader from "../../images/imageuploader.png";
import twitter from "../../images/twitter.png";
import ecommerce from "../../images/ecommerce.png";
import covid191 from "../../images/covid19-1.png";
import library from "../../images/library.jpg";
import weather from "../../images/weather2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectInfo from "./ProjectInfo";
function Project() {
  // useEffect For animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  return (
    <header className="project-wrapper container-fluid">
      <div className="container">
        <h2 id="project" className="text-white">
          Projects
        </h2>
        <div className="post-wrapper">
          <ProjectInfo
            image={twitter}
            title="Twitter Clone "
            duration="OCT 2021"
            posts="This is a Progressive Web Application(PWA) , developed on ReactJS, react-router, NodeJS , MongoDB
            and Firebase , For Authentication used JWT and Bcrypt"
            url="https://twitter-clone-93328.web.app/"
          />
          <ProjectInfo
            image={imageuploader}
            title="Image Uploader "
            duration=" Jan 2021 – Feb 2021"
            posts="This Web Application created using MERN stack (MongoDB, Express, Reactjs , Nodejs) "
            url="https://mren-imageupload-app.netlify.app/"
          />
          <ProjectInfo
            image={ecommerce}
            title="E-Commerce WebApp "
            duration=" Nov 2020"
            posts="It’s a Responsive E-commerce Website developed on React js ,React router ,React Hooks and Bootstrap4"
            url="https://jranjangudu.github.io/Titaniumsite/"
          />
          <ProjectInfo
            image={covid191}
            title="Covid-19 Tracker"
            duration="Dec 2020"
            posts="This website developed on React js and Chart js , APIs and Bootstrap4, "
            url="https://jranjangudu.github.io/Covid-19-Tracker/"
          />
          <ProjectInfo
            image={weather}
            title="Weather App Extension"
            duration="Oct 2021"
            posts="Develop a Chrome extension of Weather app , it simply show the weather of given city / location
            "
            git="https://github.com/Jranjangudu/weather-app-extension"
          />
          <ProjectInfo
            image={library}
            title="library Management System"
            duration="Oct 2020"
            posts=" This  application developed on HTML ,CSS ,Javascript and
            Bootstrap
            "
            url="https://jranjangudu.github.io/Library-management/"
          />

          <div className="extra"></div>
        </div>
      </div>
    </header>
  );
}

export default Project;
