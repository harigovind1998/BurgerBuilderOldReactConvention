import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import cssClasses from "./BuildControls.module.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => (
  <div className={cssClasses.BuildControls}>
    {controls.map((obj) => {
      return (
        <BuildControl
          key={obj.label}
          label={obj.label}
          added={() => props.addIngredientHandler(obj.type)}
          removed={() => props.removeIngredientHandler(obj.type)}
          disabled={props.disabledInfo[obj.type]}
        />
      );
    })}
  </div>
);

export default buildControls;
