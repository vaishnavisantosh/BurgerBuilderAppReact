const initialState={
    ingredients:{
        cheese:0,
    salad:0,
    bacon:0,
    meat:0
    },
    totalPrice:15

}


const reducer=(state=initialState,action)=>{
    switch(action.type){

        case ADD_INGREDIENTS :
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1

                }

            }

        case DELETE_INGREDIENTS:
            return{
                ...state,
                [action.ingredientName]:state.ingredientName[action.ingredientName]-1
            }
            
        default:
            return state;    



    }
   
}






export default reducer;