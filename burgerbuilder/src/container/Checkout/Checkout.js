import React , {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component{
    state={
        ingredients:{
            cheese: 1,
            salad: 1,
            bacon: 1,
            meat: 1
        }
        
    }

    onCancelHandler=()=>{
        this.props.history.goBack();

    }

    onContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');

    }

    render(){
         return(
         <div>
             <CheckoutSummary 
             ingredients={this.state.ingredients}
             onCancel={this.onCancelHandler}
             onContinue={this.onContinueHandler}
             />
        </div>);
    }

}


export default Checkout;