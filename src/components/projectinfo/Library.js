import React from "react";
import library from "../../images/library.jpg";
import library2 from "../../images/library2.jpg";
import library3 from "../../images/library3.jpg";
import library4 from "../../images/library4.png";
import { Link } from "react-router-dom";
function Library() {
  return (
    <div className="container">
      <div className=" p-3 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <img src={library} alt="..." className="img-fluid" width="600px" />
      <h2 className="text-dark my-3" style={{ fontFamily: "revert" }}>
        library Management System
      </h2>
      <p>
        It's a web application developed on Javascript, Bootstrap and Cookies !!
      </p>
      Link :-
      <a
        href="https://github.com/Jranjangudu/Library-management"
        className="text-dark"
        target="_blank"
      >
        Github
      </a>
      <h5 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Technologies:
      </h5>
      <ul>
        <li>- Html5</li>
        <li>- Css3</li>
        <li>- Javascript</li>
        <li>- Bootstrap4,</li>
      </ul>
      <img src={library4} alt="..." className="img-fluid" width="600px" />{" "}
      <br />
      <br />
      <img src={library2} alt="..." className="img-fluid" width="600px" />{" "}
      <br />
      <img src={library3} alt="..." className="img-fluid my-4" width="300px" />
    </div>
  );
}

export default Library;
