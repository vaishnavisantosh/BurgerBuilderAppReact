import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/ButtonStyle/ButtonStyle';


const ordersummary=(props)=>{
    const ingredientsArray=Object.keys(props.ingredients);

    const showSummary=ingredientsArray.map(ikay=>{
        return <li key={ikay}>{ikay}:{props.ingredients[ikay]}</li>
    })
    
    return(
        <Aux>
            <p>Your Order</p>
            <ol>
                {showSummary}
            </ol>
            <Button onClick={props.cancled}>Cancel Order</Button> 
            <Button>Continue Order</Button> 
        </Aux>);

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

