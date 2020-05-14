import React from "react";

import cssClasses from "./Modal.module.css";

const modal = (props) => (
  <div className={cssClasses.Modal}>{props.children}</div>
);

export default modal;
