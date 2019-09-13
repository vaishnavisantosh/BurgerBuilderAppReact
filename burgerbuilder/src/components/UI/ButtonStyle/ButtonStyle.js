import React from 'react';
import classes from './ButtonStyle'
const buttonStyle=(props)=>(

    <button className={[classes.Button,classes[props.bType]].join(' ')}
    onClick={props.clicked}>
    {props.children}
    </button>
   
);


export default buttonStyle;