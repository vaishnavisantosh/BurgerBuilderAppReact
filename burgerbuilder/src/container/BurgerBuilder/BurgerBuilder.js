import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import Axios from 'axios';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../store/action/index';

const  BasicPriceOfIngredients = {
    cheese:2,
    salad:3,
    bacon:4,
    meat:6
}
class BurgerBuilder extends Component {
    state = {
      //  ingredients: null,
        //totalPrice:15,
        //purchasable:false,
        purchasing:false,
        //loading:false,
        //error:false
        
    }

    componentDidMount () {
        console.log(this.props); 
        this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients){
      
        const ingredientValues=Object.keys(ingredients).map(ingedientKey=>{
            return ingredients[ingedientKey];
        });
        //console.log(ingredientValues);

        const sum=ingredientValues.reduce((sum,nxtEle)=>{return sum+nxtEle},0);
        //console.log(sum);
        //this.setState({purchasable:sum>0});
        return sum >0;
    }

    

    // addIngredientHandler =(type)=>{
    //     const oldCount=this.state.ingredients[type];
    //     const updatedCount=oldCount+1;
    //     const updatedIngredients={
    //         ...this.state.ingredients
    //     };

    //     updatedIngredients[type]=updatedCount;
    //     const AddPrice=BasicPriceOfIngredients[type];

    //     const oldPrice=this.state.totalPrice;
    //     const updatedPrice=oldPrice+AddPrice;
    //     this.setState({ingredients:updatedIngredients,totalPrice:updatedPrice});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler=(typeOfIngredient)=>{
        
    //     const ingredientUpdated={
    //         ...this.state.ingredients
    //     }
    //     const oldCount=this.state.ingredients[typeOfIngredient];
    //     const updatedCount=oldCount-1;
    //     ingredientUpdated[typeOfIngredient]=updatedCount;
    //     const DeductionPrice = BasicPriceOfIngredients[typeOfIngredient];
    //     const oldPrice=this.state.totalPrice;
    //     const newPrice=oldPrice-DeductionPrice;
    //     this.setState({totalPrice:newPrice,ingredients:ingredientUpdated});
    //     this.updatePurchaseState(ingredientUpdated);
    // }


    purchasingHandler = () =>{
        this.setState({purchasing:true});
    }

    continueHandler=()=>{
   

//     const queryaparams=[];
//     for(let i in this.state.ingredients){
//         queryaparams.push(encodeURIComponent(i)+ '='+encodeURIComponent(this.state.ingredients[i]));
//     }
//   queryaparams.push('price=' + this.state.totalPrice);  
//     const queryString=queryaparams.join('&');
//     this.props.history.push({
//         pathname:'/checkout',
//         search:'?'+queryString
//     });
this.props.onInitPurchase();
    this.props.history.push('/checkout');

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

        let orderSummary=null;
        let burger=null; 
      //= this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;


        // let orderSummary=<OrderSummary 
        // ingredients={this.props.ingredients}  
        // cancled={this.cancelHandler}
        // continue={this.continueHandler}
        // totalPrice={this.state.totalPrice}/>;

        if(this.props.ingredients){
            burger=(
                <>
            <Burger ingredients={this.props.ingredients} />
            <BuildControls
            ingredientAdded={this.props.add}
            ingredientsRemoved={this.props.rem}
            ordered={this.purchasingHandler}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            price={this.props.totalCount}
            />
            </>)
             orderSummary = <OrderSummary
             ingredients={this.props.ingredients}
             price={this.props.totalCount}
             cancled={this.cancelHandler}
             continue={this.continueHandler} />;
        }
        
        return (
            <>
                <Modal showSummary={this.state.purchasing} modalClosed={this.cancelHandler}>
                    {orderSummary}            
                </Modal>
                {burger}
            </>

        );
    }
}


const mapStateToProp=state=>{
return{
ingredients:state.burgerBuilder.ingredients,
totalCount:state.burgerBuilder.totalPrice,
error:state.burgerBuilder.error
}
}

const mapPropToDispatch=dispatch=>{
return{
    add:(igname)=>dispatch(actions.add(igname)),
    rem:(igname)=>dispatch(actions.rem(igname)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())

}
}


export default  connect(mapStateToProp,mapPropToDispatch)(errorHandler(BurgerBuilder,Axios));