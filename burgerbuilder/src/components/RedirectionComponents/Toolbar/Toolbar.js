import React from 'react';
import classes from './Toolbar.css';
import Icon from '../../Icon/Icon';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        
        <div className={classes.Icon}>
            <Icon />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;