import React from 'react';
import Button from '../../UI/ButtonStyle/ButtonStyle';


const ordersummary = (props) => {
    const ingredientsArray = Object.keys(props.ingredients);

    const showSummary = ingredientsArray.map(ikay => {
        return <li key={ikay}>{ikay}:{props.ingredients[ikay]}</li>
        
    });

    return (
        <>
            <p>Your Order</p>
            <ol>
                {showSummary}
            </ol>
            <p><strong>Total Price:{props.totalPrice}</strong></p>
            <Button btntype = "Danger" clicked={props.cancled} >Cancel Order</Button>
            <Button btntype = "Success" clicked={props.continue} >Continue Order</Button>
            
        </>);

}


export default ordersummary;
































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

