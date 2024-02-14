import { applyMiddleware, combineReducers, createStore } from "redux"
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/cutomerSlice"
import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

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
