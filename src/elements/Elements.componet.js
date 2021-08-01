import React from "react";
import "./Elements.css";

const Elements = ({ photo, title, description }) => {
  return (
    <div className="elements">
      <img src={photo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Elements;
