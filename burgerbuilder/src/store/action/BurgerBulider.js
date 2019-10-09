import axios from '../../Axois';
import * as actionTypes from './actionTypes';


export const add=(igname)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:igname


    }
}


export const rem=(igname)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:igname


    }
}

export const setIngredients = ( ingredients ) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-c9f7e.firebaseio.com/order.json')
            .then( response => {
               dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};