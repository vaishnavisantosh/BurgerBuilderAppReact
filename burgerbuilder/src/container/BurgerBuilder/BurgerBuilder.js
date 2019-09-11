import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const  INGREDIENT_PRICE ={
    cheese:2,
    salad:3,
    bacon:4,
    meat:6
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice:15,
        purchasable:false

    }

    updatePurchaseState(){
        const ingredients={
            ...this.state.ingredients
        };


        const sum = Object.keys(ingredients).map(ikey=>{
            return ingredients[ikey];
        }).reduce((sum,ele)=> {return sum+ele},0);

        this.setState({purchasable:sum>0});
}

    addIngredientHandler =(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCount;
        const AddPrice=INGREDIENT_PRICE[type];

        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice+AddPrice;
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice})



//  const oldCount=this.state.ingredients[type];
//         const updatedCount=oldCount+1;
//         const updatedIngredients={
//             ...this.state.ingredients
//         }
//         updatedIngredients[type]=updatedCount;
//         const priceAddition =INGREDIENT_PRICE[type];
//         const oldPrice = this.state.totalPrice;
//         const newPrice=oldPrice+priceAddition;
//         this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    }

    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
        const priceDeduction =INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    }
    
    render() {
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        
        return (
            
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                />
            </Aux>

        );
    }
}


export default BurgerBuilder;