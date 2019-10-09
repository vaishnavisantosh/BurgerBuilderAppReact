import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import Axios from '../../Axois';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/action/index';

class Orders extends Component{
    
    // state={
    //     orders:[],
    //     loading:true
    // }

    componentDidMount () {
        this.props.onFetchOrders();
    }

    render () {
        let orders = <Spinner />;
        if ( !this.props.loading ) {
            orders = this.props.orders.map( order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ) )
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders() )
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Orders,Axios));