import React from "react";
import "./project.css";
const ProjectInfo = ({ image, title, duration, posts, url, git }) => {
  return (
    <div>
      <div className="post" data-aos="flip-up">
        <img className="thumbnail" src={image} alt="thumbnail" />

        <div className="post-preview">
          <h6 className="post-title">{title} </h6>
          <small>&#8618; {duration}</small>
          <p className="post-intro">{posts}</p>
          <a
            href={url}
            target="_blank"
            className="seelive"
            rel="noopener noreferrer"
          >
            {git ? "Github link" : " See Live"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
