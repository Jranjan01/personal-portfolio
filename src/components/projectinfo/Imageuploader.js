import React from "react";
import { Link } from "react-router-dom";
import imageuploader from "../../images/imageuploader.png";
import login from "../../images/imgupload1.jpg";
import signin from "../../images/imgupload2.jpg";
function Imageuploader() {
  return (
    <div className="container">
      <div className=" p-3 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <img src={imageuploader} alt="..." className="img-fluid" width="600px" />
      <h2 className="text-dark my-4" style={{ fontFamily: "revert" }}>
        Image Uploader
      </h2>
      <p>
        A fully User Authentication Web Application Developed on MERN stack
        (MongoDB, Express, Reacts, Nodejs) ,
      </p>
      <p>
        For verification used Jsonwebtoken(JWT), For Password hashing used
        Bcryptjs ,Email validation check, & uploading image into cloudinary by
        the help of Multer and uuid(Universally unique identifier) For generate
        random unique ID, !!
      </p>
      Link :-
      <a
        href="https://github.com/Jranjangudu/image-uploaded-clientsite"
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
        <li>- Node JS</li>
        <li>- Express</li>
        <li>- MongoDB</li>
        <li>- Bootstrap4</li>
        <li>- material-ui</li>
        <li>- cloudinary (storing images)</li>
      </ul>
      <h5 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Packages :
      </h5>
      <ul>
        <li>- Jsonwebtoken(JWT)</li>
        <li>- Bcryptjs (Password hashing)</li>
        <li>- Validator</li>
        <li>- Multer & uuid</li>
      </ul>
      <h3 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Simple Login
      </h3>
      <img src={login} alt="..." className="img-fluid" width="600px" />
      <h3 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Simple Signin
      </h3>
      <img src={signin} alt="..." className="img-fluid" width="600px" />
    </div>
  );
}

export default Imageuploader;
