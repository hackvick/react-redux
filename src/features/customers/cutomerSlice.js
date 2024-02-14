import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    fullName: "",
    nationalId: "",
    createdAt: ""
}



const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        
        createCustomer:{
            prepare(fullName,nationalId){
                return {
                    payload:{
                        fullName,nationalId,createdAt: new Date().toISOString()
                    }
                }
            },
            reducer(state,action){
                state.fullName = action.payload.fullName
                state.nationalId = action.payload.nationalId
                state.createdAt = action.payload.createdAt
            }
        }
        ,
        updateName(state,action){
            state.fullName= action.payload.fullName
        }
    }
})

export const {createCustomer,updateName} = customerSlice.actions

export default customerSlice.reducer
//Reducer
// export default function customerReducer(state = initialStateCustomer, action) {
//     switch (action.type) {
//         case "customer/createCustomer":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalId: action.payload.nationalId,
//                 createdAt: action.payload.createdAt,
//             }
//         case "customer/updateName":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName
//             }
//         default:
//             return state
//     }
// }


// //Action creator function
// export function createCustomer(fullName, nationalId) {
//     return {
//         type: "customer/createCustomer", payload: {
//             fullName, nationalId, createdAt: new Date().toISOString()
//         }
//     }
// }

// export function updateFullName(fullName) {
//     return { type: "customer/updateName", payload: {fullName} }
// }