import React from "react";
import { Link } from "react-router-dom";
import weather2 from "../../images/weather2.png";
import weather1 from "../../images/weather1.png";
import weather3 from "../../images/weather3.png";
function Weatherapp() {
  return (
    <div className="container">
      <div className=" p-3 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <img src={weather2} alt="..." className="img-fluid" width="400px" />
      <h2 className="text-dark my-3" style={{ fontFamily: "revert" }}>
        Weather App
      </h2>
      <p>
        it's a real time weather app , developed on React , bootstrap & Api !!
        ...
      </p>
      Link :-
      <a
        href="https://github.com/Jranjangudu/WeatherApp"
        className="text-dark"
        target="_blank"
      >
        Github
      </a>
      <h5 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Technologies:
      </h5>
      <ul>
        <li>- JSX (JavaScript XML)</li>
        <li>- Css3</li>
        <li>- ReactJS</li>
        <li>- Bootstrap4,</li>
      </ul>
      <img src={weather1} alt="..." className="img-fluid mr-3" width="300px" />{" "}
      <br />
      <img src={weather3} alt="..." className="img-fluid my-4" width="300px" />
    </div>
  );
}

export default Weatherapp;
