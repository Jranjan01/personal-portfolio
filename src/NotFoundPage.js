import React from "react";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div
      className="container d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className=" p-3 mt-4 ">
        <Link to="/">
          <strong className="text-dark my-3"> &#8672; Go back</strong>
        </Link>
      </div>
      <div className="mt-5">
        <h4>OOPS Page NotFound !!</h4>
        <h5 className="text-center " style={{ fontSize: "35px" }}>
          404 Error
        </h5>
      </div>
    </div>
  );
}

export default NotFoundPage;
