import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
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
    purchasable: false,
    showModal: false,
  };

  updatePurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (ing) => {
    const newCount = this.state.ingredient[ing] + 1;
    const updatedIngredient = {
      ...this.state.ingredient,
    };
    updatedIngredient[ing] = newCount;
    const newPrice = this.state.price + INGREDIENT_PRICE[ing];
    this.setState({ price: newPrice, ingredient: updatedIngredient });
    this.updatePurchasable(updatedIngredient);
  };

  removeIngredientHandler = (ing) => {
    if (this.state.ingredient[ing] !== 0) {
      const newCount = this.state.ingredient[ing] - 1;
      const updatedIngredient = {
        ...this.state.ingredient,
      };
      updatedIngredient[ing] = newCount;
      const newPrice = this.state.price - INGREDIENT_PRICE[ing];
      this.setState({ ingredient: updatedIngredient, price: newPrice });
      this.updatePurchasable(updatedIngredient);
    }
  };

  puchaseButtonClickHandler = () => {
    if (this.state.purchasable) {
      this.setState({ showModal: true });
      console.log("purchased");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ showModal: false });
  };

  purchaseContinueHandler = () => {};

  render() {
    const disabledInfo = {
      ...this.state.ingredient,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredient}
            cancelClick={this.purchaseCancelHandler}
            continueClick={this.purchaseContinueHandler}
            price={this.state.price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.price}
          purchasable={this.state.purchasable}
          purchaseClick={this.puchaseButtonClickHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
