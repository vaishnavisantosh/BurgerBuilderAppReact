import React from 'react';
import classes from './SideDrawer.css';
import Icon from '../../Icon/Icon';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) => {
    let attchedClasses=[classes.sideDrawer,classes.Close];
    if(props.open){
        attchedClasses=[classes.sideDrawer,classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attchedClasses.join(' ')}>
            <div className={classes.Icon}>
                <Icon />
            </div>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>

        </div>

        </Aux>
        

    );
};


export default sideDrawer;