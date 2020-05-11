import React from "react";

import cssClasses from "./BuildControl.module.css";
const buildControl = (props) => {
  return (
    <div className={cssClasses.BuildControl}>
      <div className={cssClasses.Label}>{props.label}</div>
      <button className={cssClasses.More} onClick={props.added}>
        More
      </button>
      <button
        className={cssClasses.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        less
      </button>
    </div>
  );
};

export default buildControl;
