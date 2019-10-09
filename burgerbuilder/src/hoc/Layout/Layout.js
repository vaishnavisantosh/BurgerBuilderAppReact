import React, { Component ,useState } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../../components/RedirectionComponents/Toolbar/Toolbar';
import SideDrawer from '../../components/RedirectionComponents/SideDrawer/SideDrawer';



 const layout =props=> {
    state = {
        showSideDrawer: false
    }

    const [isSideDrawerVisible,setIsSideDrawervisible] = useState(false);

    sideDrawerClosedHandler = () => {
        setIsSideDrawervisible(false);
    }

    sideDrawerToggleHandler = () => {
        setIsSideDrawervisible(!isSideDrawerVisible);
    }

   
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    
}

export default Layout;