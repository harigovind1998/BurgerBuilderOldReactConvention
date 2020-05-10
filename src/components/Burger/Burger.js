import React from "react";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

import cssClasses from "./Burger.module.css";

const burger = (props) => {
  let transIngredient = Object.keys(props.ingredients)
    .map((ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((__, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transIngredient);

  if (transIngredient.length === 0) {
    transIngredient = <p>Add ingredients</p>;
  }

  return (
    <div className={cssClasses.Burger}>
      <BurgerIngredient type="bread-top" />
      {transIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
