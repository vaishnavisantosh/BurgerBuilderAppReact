import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as BurgerBuilderActions from '../../store/action/index';
import Axios from 'axios';

const  BasicPriceOfIngredients = {
    cheese:2,
    salad:3,
    bacon:4,
    meat:6
}
class BurgerBuilder extends Component {
    state = {
      //  ingredients: null,
        totalPrice:15,
        purchasable:false,
        purchasing:false,
        loading:false,
        //error:false
        
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

    continueHandler=()=>{
   

    const queryaparams=[];
    for(let i in this.state.ingredients){
        queryaparams.push(encodeURIComponent(i)+ '='+encodeURIComponent(this.state.ingredients[i]));
    }
  queryaparams.push('price=' + this.state.totalPrice);  
    const queryString=queryaparams.join('&');
    this.props.history.push({
        pathname:'/checkout',
        search:'?'+queryString
    });
    }
    
    cancelHandler= () =>{
        this.setState({purchasing:false});
    }
    
    render() {
        const disabledInfo={
            ...this.props.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        let orderSummary=<OrderSummary 
        ingredients={this.props.ingredients}  
        cancled={this.cancelHandler}
        continue={this.continueHandler}
        totalPrice={this.state.totalPrice}/>;

        if(this.props.ingredients){
            orderSummary = <Spinner/>;
        }
        
        return (
            <>
                <Modal showSummary={this.state.purchasing}>
                    {orderSummary}            
                </Modal>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                ingredientAdded={this.props.add}
                ingredientsRemoved={this.props.rem}
                ordered={this.purchasingHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                />
            </>

        );
    }
}


const mapStateToProp=state=>{
return({
ingredients:state.ingredients,
totalCount:state.totalPrice
})
}

const mapPropToDispatch=dispatch=>{
return{
    add:(igname)=>dispatch(BurgerBuilderActions.add(igname)),
    rem:(igname)=>dispatch(BurgerBuilderActions.rem(igname))

}
}


export default  connect(mapStateToProp,mapPropToDispatch)(BurgerBuilder,Axios);