import React  ,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !==this.props.showSummary || nextProps.children !==this.props.children;
    }
     
    componentWillUpdate(){
        console.log('[Modal] willUpdate');
    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.showSummary} clicked ={this.props.modalClosed}/>
    <div className={classes.Modal}
         style={{transform :this.props.showSummary ? 'translateY(0)' : 'translateY(-100vh)',
         opacity:this.props.showSummary ? '1' : '0'
         }}>
        {this.props.children}
    </div>
 </Aux>

        );
    }
}
   
 
export default Modal; 