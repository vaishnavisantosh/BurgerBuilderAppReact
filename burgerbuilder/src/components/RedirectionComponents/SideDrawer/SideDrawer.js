import React from 'react';

import classes from './SideDrawer.css';
import Icon from '../../Icon/Icon';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer=(props)=>{
    return(
        <div className={classes.sideDrawer}>
            <div className={classes.Icon}>
                <Icon />
            </div>
            <nav>
                <NavigationItems/>
            </nav>

        </div>

    );
};


export default sideDrawer;