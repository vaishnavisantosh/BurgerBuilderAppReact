import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/ButtonStyle/ButtonStyle';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) =>{
    return(
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{width:'100%',height:'200px',margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Dnager" 
                clicked ={props.onCancel} >CANCEL</Button>

        <Button btnType="Success"
                clicked={props.onContinue}>CONTINUE</Button>
    </div>
    );
} 


export default checkoutSummary;