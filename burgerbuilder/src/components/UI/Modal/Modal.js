import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
const modal = (props) =>(
<Aux>
    <div className={classes.Modal}
         style={{transform : props.showSummary ? 'translateY(0)' : 'translateY(-100vh)',
         opacity:props.showSummary ? '1' : '0'
         }}>
        {props.children}
    </div>
 </Aux>   
);
 
export default modal; 