import {Dispatch} from "redux";
import {CustomerAction, CustomerActionTypes} from "../../types/customer";
import axios from "axios";
import {Account} from "../../types/account";

export const getCustomers = () =>
    async (dispatch: Dispatch<CustomerAction>) => {
        try {
            dispatch({type: CustomerActionTypes.CUSTOMER_REQUEST});
            const response = await axios.get(`${process.env.REACT_APP_API_URL}customers`);
            // Timeout для иммитированой загрузки с сервера
            setTimeout(() => {
                dispatch({type: CustomerActionTypes.GET_CUSTOMERS_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: CustomerActionTypes.REQUEST_ERROR,
                payload: "Failed to get customers. " + String(e)
            });
        }
    }

export const createCustomer = (name: string, email: string, age: number, password: string, phoneNumber: string) =>
    async (dispatch: Dispatch<CustomerAction>) => {
        try {
            dispatch({type: CustomerActionTypes.CUSTOMER_REQUEST});
            const response = await axios.post(`${process.env.REACT_APP_API_URL}customers`, {
                name,
                email,
                age,
                password,
                phoneNumber
            });
            console.log(response);
            dispatch({type: CustomerActionTypes.CREATE_CUSTOMER_SUCCESS});
        } catch (e) {
            dispatch({
                type: CustomerActionTypes.REQUEST_ERROR,
                payload: "Failed to create customer. " + String(e)
            });
        }
    }

export const deleteCustomer = (id: number) =>
    async (dispatch: Dispatch<CustomerAction>) => {
        try {
            dispatch({type: CustomerActionTypes.CUSTOMER_REQUEST});
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}customers/${id}`);
            console.log(response);
            dispatch({type: CustomerActionTypes.DELETE_CUSTOMER_SUCCESS});
        } catch (e) {
            dispatch({
                type: CustomerActionTypes.REQUEST_ERROR,
                payload: "Failed to delete customer. " + String(e)
            });
        }
    }

export const updateCustomer = (id: number | undefined, name: string | undefined, email: string | undefined, age: number | undefined, accounts: Account[] | [], password: string | undefined, phoneNumber: string | undefined) =>
    async (dispatch: Dispatch<CustomerAction>) => {
        try {
            dispatch({type: CustomerActionTypes.CUSTOMER_REQUEST});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}customers`, {
                id,
                name,
                email,
                age,
                accounts,
                password,
                phoneNumber
            });
            console.log(response);
            dispatch({type: CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS})

        } catch (e) {
            dispatch({
                type: CustomerActionTypes.REQUEST_ERROR,
                payload: "Failed to update customer. " + String(e)
            });
        }
    }

export const getCustomerById = (id: number) =>
    async (dispatch: Dispatch<CustomerAction>) => {
        try {
            dispatch({type: CustomerActionTypes.CUSTOMER_REQUEST});
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}customers/${id}`);
            dispatch({type: CustomerActionTypes.GET_CUSTOMER_SUCCESS});
            return data;
        } catch (e) {
            dispatch({
                type: CustomerActionTypes.REQUEST_ERROR,
                payload: "Failed to get customer. " + String(e)
            });
        }
    }