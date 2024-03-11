import React from "react";
import "./global.css";
const HeadLine = (props) => {
  const { title } = props;
  return (
    <div>
      <h1 className="headline">{title}</h1>
    </div>
  );
};

export default HeadLine;
