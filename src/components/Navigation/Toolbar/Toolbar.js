import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

import cssClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => (
  <header className={cssClasses.Toolbar}>
    <div>Menu</div>

    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
