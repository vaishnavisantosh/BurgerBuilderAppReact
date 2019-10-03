import Axios from "axios"

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: 'PURCHASE_BURGER_SUCCESS',
        orderId: id,
        orderData: orderData
    }

}


export const purchaseBurgerFail = (error) => {
    return {
        type: 'PURCHASE_BURGER_FAIL',
        error: error

    }
}


export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        Axios.post('', orderData)
            .then(response => {
                dispatch(purchaseBurgerStart(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail( error ));
            }
            );
    }
}