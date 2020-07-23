import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

import cssClasses from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let attachedClasses = [cssClasses.SideDrawer, cssClasses.Close];
  if (props.open) {
    attachedClasses = [cssClasses.SideDrawer, cssClasses.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={cssClasses.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
