import React from "react";

import cssClasses from "./BuildControl.module.css";
const buildControl = (props) => {
  return (
    <div className={cssClasses.BuildControl}>
      <div className={cssClasses.Label}>{props.label}</div>
      <button className={cssClasses.Less}>More</button>
      <button className={cssClasses.More}>less</button>
    </div>
  );
};

export default buildControl;
