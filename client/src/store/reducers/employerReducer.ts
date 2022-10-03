import {EmployerAction, EmployerActionTypes, EmployerState} from "../../types/employer";

const initialState: EmployerState = {
    employers: [],
    loading: false,
    error: null,
}

export const employerReducer = (state = initialState, action: EmployerAction) => {
    switch (action.type) {
        case EmployerActionTypes.EMPLOYER_REQUEST:
            return {...state, loading: true}
        case EmployerActionTypes.CREATE_EMPLOYER_SUCCESS:
            return {...state, loading: false, error: null}
        case EmployerActionTypes.GET_EMPLOYERS_SUCCESS:
            return {loading: false, error: null, employers: action.payload}
        case EmployerActionTypes.GET_EMPLOYER_SUCCESS:
            return {...state, loading: false, error: null}
        case EmployerActionTypes.DELETE_EMPLOYER_SUCCESS:
            return {...state, loading: false, error: null}
        case EmployerActionTypes.UPDATE_EMPLOYER_SUCCESS:
            return {...state, loading: false, error: null}
        case EmployerActionTypes.REQUEST_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}