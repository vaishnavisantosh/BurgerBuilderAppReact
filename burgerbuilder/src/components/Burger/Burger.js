import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger=(props)=>{
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            <BurgerIngredients type="bread-bottom"/>
            <BurgerIngredients type="cheese"/>
            <BurgerIngredients type="meat"/>




        </div>
    );

}

export default burger;