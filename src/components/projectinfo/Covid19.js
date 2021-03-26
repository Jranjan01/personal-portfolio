import React from "react";

import covid191 from "../../images/covid19-1.png";
import covid192 from "../../images/covid19-2.png";
import { Link } from "react-router-dom";
function Covid19() {
  return (
    <div className="container">
      <div className=" p-3 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <img src={covid191} alt="..." className="img-fluid" width="600px" />
      <h2 className="text-dark" style={{ fontFamily: "revert" }}>
        Covid-19 Tracker
      </h2>
      <p>
        This website developed on React js & Chart js, Chart js helps to make a
        bar / line charts , Real time APIs & Bootstrap4, Basically this website
        shows the total covid-19 active, death & recovery case of every
        countries wise
      </p>
      <p>
        This covid19 tracker helps people to get the number of active, death &
        recovery case details in countries wise,
      </p>
      Link :-
      <a
        href="https://github.com/Jranjangudu/Covid-19-Tracker"
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
        <li>- React JS</li>
        <li>- Chart js</li>
        <li>- APIs</li>
        <li>- Bootstrap4,</li>
      </ul>
      <img src={covid192} alt="..." className="img-fluid" width="600px" />
    </div>
  );
}

export default Covid19;
