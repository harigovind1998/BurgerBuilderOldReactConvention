import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Aux from "../../hoc/Aux";

const INGREDIENT_PRICE = {
  salad: 0.75,
  cheese: 0.75,
  bacon: 1.25,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    price: 3,
  };

  addIngredientHandler = (ing) => {
    const newCount = this.state.ingredient[ing] + 1;
    const updatedIngredient = {
      ...this.state.ingredient,
    };
    updatedIngredient[ing] = newCount;
    const newPrice = this.state.price + INGREDIENT_PRICE[ing];
    this.setState({ price: newPrice, ingredient: updatedIngredient });
  };

  removeIngredientHandler = (ing) => {
    if (this.state.ingredient[ing] != 0) {
      const newCount = this.state.ingredient[ing] - 1;
      const updatedIngredient = {
        ...this.state.ingredient,
      };
      updatedIngredient[ing] = newCount;
      const newPrice = this.state.price - INGREDIENT_PRICE[ing];
      this.setState({ ingredient: updatedIngredient, price: newPrice });
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
