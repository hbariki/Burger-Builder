import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    // Ingredient Object will be converted into Array ["salad", "bacon", "cheese", "meat"]
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        //console.log([...Array(props.ingredients[igKey])]);
        return [...Array(props.ingredients[igKey])].map(( _, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    }).reduce ((arr, el) => {
        return arr.concat(el)
    }, []);
    console.log(transformedIngredients);
     if(transformedIngredients.length === 0) {
         transformedIngredients = <p>Please start adding elements</p>;
     }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};
    

export default burger;