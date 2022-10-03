import {AccountAction, AccountActionTypes, AccountState} from "../../types/account";

const initialState: AccountState = {
    accounts: [],
    loading: false,
    error: null
}

export const accountReducer = (state = initialState, action: AccountAction) => {
    switch (action.type) {
        case AccountActionTypes.ACCOUNT_REQUEST:
            return {loading: true, error: null, accounts: []}
        case AccountActionTypes.CREATE_ACCOUNT_SUCCESS:
            return {...state, loading: false, error: null}
        case AccountActionTypes.GET_ACCOUNTS_SUCCESS:
            return {loading: false, error: null, accounts: action.payload}
        case AccountActionTypes.DELETE_ACCOUNT_SUCCESS:
            return {...state, loading: false, error: null}
        case AccountActionTypes.TRANSFER_MONEY_SUCCESS:
            return {...state, loading: false, error: null}
        case AccountActionTypes.WITHDRAW_MONEY_SUCCESS:
            return {...state, loading: false, error: null}
        case AccountActionTypes.UP_MONEY_SUCCESS:
            return {...state, loading: false, error: null}
        case AccountActionTypes.REQUEST_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}