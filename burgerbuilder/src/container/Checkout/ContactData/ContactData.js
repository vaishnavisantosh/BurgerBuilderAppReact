import React, { Component } from 'react';
import Button from '../../../components/UI/ButtonStyle/ButtonStyle';
import classes from './ContactData.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            pinCode: ''
        }
    }

    render() {
        return (
            <div className={classes.contactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input  className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="pincode" placeholder="pin code" />
                    <Button className={classes.Input} btntype="success"> ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;