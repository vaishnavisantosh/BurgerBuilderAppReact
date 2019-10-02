export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:'PURCHASE_BURGER_SUCCESS',
        orderId:id,
        orderData:orderData
    }

}


export const purchaseBurgerFail=(error)=>{
    return{
        type:'PURCHASE_BURGER_FAIL',
        error:error
        
    }
}


