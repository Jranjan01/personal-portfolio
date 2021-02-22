import React from "react";
import ecommerce from "../../images/ecommerce.png";
import ecommerce1 from "../../images/ecommerce1.jpg";
import ecommerce2 from "../../images/ecommerce2.jpg";
import ecommerce4 from "../../images/ecommerce4.jpg";
import ecommerce5 from "../../images/ecommerce5.jpg";
import { Link } from "react-router-dom";
function Ecommerce() {
  return (
    <div className="container">
      <div className=" p-3 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <img src={ecommerce} alt="..." className="img-fluid" width="600px" />
      <h2 className="text-dark" style={{ fontFamily: "revert" }}>
        E-Commerce Website
      </h2>
      <p>It’s a Rasponsive E-commerce website developed on React js</p>
      Link :-
      <a
        href="https://github.com/Jranjangudu/Titaniumsite"
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
        <li>- React router</li>
        <li>- React Hooks</li>
        <li>- Bootstrap4,</li>
      </ul>
      <h5 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        Features :
      </h5>
      <ul>
        <li>- Add to carts</li>
        <li>- products details</li>
        <li>- QnA Options</li>
        <li>- smooth scroll animation</li>
      </ul>
      <h3 className="text-dark my-3" style={{ fontFamily: "fantasy" }}>
        product Lists
      </h3>
      <img src={ecommerce1} alt=".." className="img-fluid" width="600px" />
      <h3 className="my-3" style={{ fontFamily: "fantasy" }}>
        All Items
      </h3>
      <img src={ecommerce2} alt=".." className="img-fluid" width="600px" />
      <h3 className="my-3" style={{ fontFamily: "fantasy" }}>
        Customer Reviews
      </h3>
      <img src={ecommerce4} alt=".." className="img-fluid" width="600px" />
      <h3 className="my-3" style={{ fontFamily: "fantasy" }}>
        Footer
      </h3>
      <img src={ecommerce5} alt=".." className="img-fluid" width="600px" />
    </div>
  );
}

export default Ecommerce;
