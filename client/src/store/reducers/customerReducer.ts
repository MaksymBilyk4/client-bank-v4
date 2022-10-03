import {CustomerAction, CustomerActionTypes, CustomerState} from "../../types/customer";

const initialState: CustomerState = {
    customers: [],
    loading: false,
    error: null,
}

export const customerReducer = (state = initialState, action: CustomerAction) => {
    switch (action.type) {
        case CustomerActionTypes.CUSTOMER_REQUEST:
            return {...state, loading: true}
        case CustomerActionTypes.CREATE_CUSTOMER_SUCCESS:
            return {...state, loading: false, error: null}
        case CustomerActionTypes.GET_CUSTOMERS_SUCCESS:
            return {loading: false, error: null, customers: action.payload}
        case CustomerActionTypes.GET_CUSTOMER_SUCCESS:
            return {...state, loading: false, error: null}
        case CustomerActionTypes.DELETE_CUSTOMER_SUCCESS:
            return {...state, loading: false, error: null}
        case CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS:
            return {...state, loading: false, error: null}
        case CustomerActionTypes.REQUEST_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}