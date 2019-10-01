import axios from '../../Axois';

export const add=(igname)=>{
    return{
        type:'ADD_INGREDIENTS',
        ingredientName:igname


    }
}


export const rem=(igname)=>{
    return{
        type:'DELETE_INGREDIENTS',
        ingredientName:igname


    }
}

export const setIngredients = ( ingredients ) => {
    return {
        type: 'SET_INGREDIENTS',
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: 'FETCH_INGREDIENTS_FAILED'
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-c9f7e.firebaseio.com/')
            .then( response => {
               dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed());
            } );
    };
};