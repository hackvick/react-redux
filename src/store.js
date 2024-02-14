import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/cutomerSlice"

import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer
    }
})

export default store






// store.dispatch({type:"account/deposit",payload:500})
// store.dispatch({type:"account/withdraw",payload:200})
// console.log(store.getState())

// store.dispatch({type:"account/requestLoan",payload:{
//     amount:1000,
//     purpose:"Buy a car"
// }})
// store.dispatch({type:"account/payLoan"})



// store.dispatch(deposit(500))
// store.dispatch(requestLoan(1000, "Buy a car"))
// store.dispatch(payLoan())
// console.log(store.getState())



// store.dispatch(createCustomer("vicky",23))
// store.dispatch(updateFullName("sunny"))

// console.log(store.getState())
