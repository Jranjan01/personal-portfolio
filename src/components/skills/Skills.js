import React, { useEffect } from "react";
import "./skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  // useEffect For animation
  useEffect(() => {
    AOS.init({ duration: 1000 });

    AOS.refresh();
  }, []);
  return (
    <header className="container-fluid parent-container ">
      <h3 id="skill" className="text-white">
        Skills
      </h3>
      <div className="skill-container">
        <div className="container main_container">
          <div className="skill_area1" data-aos="flip-left">
            <div className="html skill_degine">
              <h4>HTML 5</h4>
            </div>
            <div className="css skill_degine">
              <h4>CSS 3 & SCSS</h4>
            </div>
            <div className="javascript skill_degine">
              <h4>JavaScript</h4>
            </div>
            <div className="python skill_degine">
              <h4>Python</h4>
            </div>
          </div>
          <div className="skill_area2" data-aos="flip-up">
            <div className="react skill_degine">
              <h4>React JS & Redux</h4>
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
          style={{
            fontfamily: "Grenze Gotisch",

            fontfamily: "Wallpoet",
          }}
        >
          {/* Other skills 👇 */}
          Familiar with 👇
        </h4>
        <div
          className="other_skill "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="familiar_with">
            <div className=" familiar">
              <h4>MySQL</h4>
            </div>
            <div className=" familiar">
              <h4>Socket.io</h4>
            </div>
          </div>
        </div>
        <h4
          className="text-white text-center"
          style={{
            fontfamily: "Grenze Gotisch",

            fontfamily: "Wallpoet",
          }}
        >
          Other skills 👇
        </h4>
        <div className=" pt-2 text-center pb-5 ">
          <strong
            className="text-white"
            style={{
              fontFamily: "monospace",
              fontSize: "18px",
              letterSpacing: 1,

              padding: "6px 4px ",
            }}
          >
            <span style={{ fontSize: "30px", color: "#09f7f7" }}>&#x2623;</span>{" "}
            DS , Algo ,FireBase ,Bootstrap , material-ui , Git , Github , Heroku ,
            Netlify , PWA{" "}
            <span style={{ fontSize: "30px", color: "#09f7f7" }}>&#x2623;</span>
          </strong>
        </div>
      </div>
    </header>
  );
}

export default Skills;
