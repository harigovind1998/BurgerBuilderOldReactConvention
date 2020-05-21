import React from "react";

import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue?</p>
      <Button buttonType="Danger" clicked={props.cancelClick}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.continueClick}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
