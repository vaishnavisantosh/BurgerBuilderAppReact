import React from 'react';
import {Component} from 'react';
import Button from '../../UI/ButtonStyle/ButtonStyle';


class Ordersummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render(){
    const ingredientsArray = Object.keys(this.props.ingredients);

    const showSummary = ingredientsArray.map(ikay => {
        return <li key={ikay}>{ikay}:{this.props.ingredients[ikay]}</li>
        
    });


    return (
        <>
            <p>Your Order</p>
            <ol>
                {showSummary}
            </ol>
            <p><strong>Total Price:{this.props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btntype = "Danger" clicked={this.props.cancled} >Cancel Order</Button>
            <Button btntype = "Success" clicked={this.props.continue} >Continue Order</Button>
            
        </>);

}
}

export default Ordersummary;
































// const ordersummary =(props)=>{
//     const ingredientsArray=Object.keys(props.ingredients);

//     const summary=ingredientsArray.map(ikey=>{
//        return <li key={ikey}> {ikey}:{props.ingredients[ikey]}</li>
//     });

//     return(
//         <Aux>
//             <h3>Your Order</h3>
//             <p> A deliciouse burger with the following ingredients:</p>
//             <ol>
//                 {summary}
//             </ol>

//         </Aux>

//     )

// };

