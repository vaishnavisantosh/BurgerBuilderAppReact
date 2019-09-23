import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import Axios from '../../Axois';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';



class Orders extends Component{
    
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        Axios.get('/orders.json')
        .then(res=>{
            const fetchedData=[];
            for(let key in res.data){
                fetchedData.push({...res.data[key],id:key});
            }
            this.setState({loading:false});

        })
        .catch(err=>
            {
                this.setState({loading:false});
            })

    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=><Order 
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
                />)
                }
            </div>
        );
    }


}


export default ErrorHandler(Orders,Axios);