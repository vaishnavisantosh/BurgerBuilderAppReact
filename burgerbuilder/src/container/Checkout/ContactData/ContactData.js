import React, { Component } from 'react';
import Button from '../../../components/UI/ButtonStyle/ButtonStyle';
import classes from './ContactData.css';
import Axios from '../../../Axois';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your Name'
                },
                value: ''
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
            },
            modeOfDelivery: {

                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }

        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({
            loading: true
        })
        let orderObject = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,

        }
        //alert("continue");
        Axios.post('/order', orderObject)
            .then(response => {
                console.log(response);
                this.setState({ loading: false });
                this.props.history.push('/');
            }).catch(error => {
                this.setState({
                    loading: false
                })

            })
    }

    render() {

        let formArray = [];
        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        let form = (
            <form>

                {formArray.map(formElement => (
                    <Input
                        key={formElement.config.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} />
                ))}


                <Button inputtype="input" btntype="Success" clicked={this.orderHandler}> ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.contactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;