import React from 'react';
import classes from './Order.css';

const order=(props)=>(
    <div className={classes.Order}>
        <p>Ingredients:salad(1)</p>
        <p>Price:<strong>USD {props.price}</strong></p>
    </div>
    
);


export default order;