const initialStateCustomer = {

    fullName: "",
    nationalId: "",
    createdAt: ""
}



//Reducer
export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt,
            }
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload.fullName
            }
        default:
            return state
    }
}


//Action creator function
export function createCustomer(fullName, nationalId) {
    return {
        type: "customer/createCustomer", payload: {
            fullName, nationalId, createdAt: new Date().toISOString()
        }
    }
}

export function updateFullName(fullName) {
    return { type: "customer/updateName", payload: {fullName} }
}