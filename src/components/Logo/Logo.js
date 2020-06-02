import React from "react";

import cssClasses from "./Logo.module.css";
import burgerLogo from "../../Assets/Images/original.png";

const logo = (props) => (
  <div className={cssClasses.Logo}>
    <img src={burgerLogo} alt="burger" />
  </div>
);

export default logo;
