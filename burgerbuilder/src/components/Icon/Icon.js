import React from 'react';
import classes from './Icon.css';
import burgerIcon from '../../Assets/images/burger-logo.png';


const icon =(props)=>(
<div className={classes.Icon} style={{height:props.height}}>
    <img src={burgerIcon} alt="MyBurger" ></img>
</div>
);

export default icon;