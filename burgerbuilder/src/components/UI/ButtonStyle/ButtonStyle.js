import React from 'react';
import classes from './ButtonStyle.css';

const buttonStyle = (props) => (

    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btntype]].join(' ')}
        onClick={props.clicked}>{props.children}

    </button>

);


export default buttonStyle;