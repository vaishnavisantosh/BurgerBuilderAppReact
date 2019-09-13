import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const  BasicPriceOfIngredients = {
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
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
      
        const ingredientValues=Object.keys(ingredients).map(ingedientKey=>{
            return ingredients[ingedientKey];
        });
        //console.log(ingredientValues);

        const sum=ingredientValues.reduce((sum,nxtEle)=>{return sum+nxtEle},0);
        //console.log(sum);
        this.setState({purchasable:sum>0});
    }

    addIngredientHandler =(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCount;
        const AddPrice=BasicPriceOfIngredients[type];

        const oldPrice=this.state.totalPrice;
        const updatedPrice=oldPrice+AddPrice;
        this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(typeOfIngredient)=>{
        
        const ingredientUpdated={
            ...this.state.ingredients
        }
        const oldCount=this.state.ingredients[typeOfIngredient];
        const updatedCount=oldCount-1;
        ingredientUpdated[typeOfIngredient]=updatedCount;
        const DeductionPrice = BasicPriceOfIngredients[typeOfIngredient];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-DeductionPrice;
        this.setState({totalPrice:newPrice,ingredients:ingredientUpdated});
        this.updatePurchaseState(ingredientUpdated);
    }


    purchasingHandler = () =>{
        this.setState({purchasing:true});

    }
    
    cancelHandler= () =>{
        this.setState({purchasing:false});

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
                <Modal showSummary={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}  cancled={this.cancelHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                ordered={this.purchasingHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                />
            </Aux>

        );
    }
}


export default BurgerBuilder;