import {Account} from "./account";

export interface Customer {
    id: number,
    name: string,
    email: string,
    age: number,
    accounts: Account[],
    phoneNumber: string,
    password: string,
    employers: number[],
}

export interface CustomerState {
    customers: Customer[],
    loading: boolean,
    error: null | string,
}

export enum CustomerActionTypes {
    CUSTOMER_REQUEST = "CUSTOMER_REQUEST",
    CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS",
    GET_CUSTOMERS_SUCCESS = "GET_CUSTOMERS_SUCCESS",
    GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS",
    DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS",
    UPDATE_CUSTOMER_SUCCESS = "UPDATE_CUSTOMER_SUCCESS",
    REQUEST_ERROR = "REQUEST_ERROR",
}

interface CustomerRequestAction {
    type: CustomerActionTypes.CUSTOMER_REQUEST;
}

interface CreateCustomerSuccessAction {
    type: CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;
}

interface GetCustomersSuccessAction {
    type: CustomerActionTypes.GET_CUSTOMERS_SUCCESS;
    payload: Customer[];
}

interface GetCustomerSuccessAction {
    type: CustomerActionTypes.GET_CUSTOMER_SUCCESS;
}

interface DeleteCustomerSuccessAction {
    type: CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;
}

interface UpdateCustomerSuccessAction {
    type: CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;
}

interface RequestErrorAction {
    type: CustomerActionTypes.REQUEST_ERROR;
    payload: string;
}

export type CustomerAction =
    CustomerRequestAction |
    CreateCustomerSuccessAction |
    GetCustomersSuccessAction |
    GetCustomerSuccessAction |
    DeleteCustomerSuccessAction |
    UpdateCustomerSuccessAction |
    RequestErrorAction
