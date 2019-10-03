import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem';

const navigationItems =()=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact > Burger Builder</NavigationItem>
        <NavigationItem link="/orders"> Orders</NavigationItem>
        <NavigationItem link="/auth"> Authorization</NavigationItem>


    </ul>
);
export default navigationItems;