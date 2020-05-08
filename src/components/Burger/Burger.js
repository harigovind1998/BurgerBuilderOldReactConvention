import React from 'react';

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient"

import cssClasses from "./Burger.module.css"

const burger = props =>{
    return(
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>


        </div>
    );
}

export default burger;