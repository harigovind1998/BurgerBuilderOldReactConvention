import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Added ingredients</p>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
