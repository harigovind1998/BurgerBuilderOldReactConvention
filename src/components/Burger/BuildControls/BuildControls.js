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
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
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
    <button
      className={cssClasses.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchaseClick}
    >
      Order the special burger now
    </button>
  </div>
);

export default buildControls;
