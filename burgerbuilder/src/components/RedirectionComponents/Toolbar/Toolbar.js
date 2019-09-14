import React from 'react';
import classes from './Toolbar.css';
import Icon from '../../Icon/Icon';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Icon}>
            <Icon />
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;