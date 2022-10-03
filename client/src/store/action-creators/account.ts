import {AccountAction, AccountActionTypes} from "../../types/account";
import {Dispatch} from "redux";
import axios from "axios";

export const getAccounts = () =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.get(`${process.env.REACT_APP_API_URL}accounts`);
            // Timeout для иммитированой загрузки с сервера
            setTimeout(() => {
                dispatch({type: AccountActionTypes.GET_ACCOUNTS_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Failed to get accounts. " + String(e)
            });
        }
    }

export const createAccount = (customerId: number | undefined, currency: string, balance: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.post(`${process.env.REACT_APP_API_URL}customers/${customerId}/account`, {
                currency,
                balance,
            });
            console.log(response);
            dispatch({type: AccountActionTypes.CREATE_ACCOUNT_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Failed create account. " + String(e)
            });
        }
    }

export const deleteAccount = (customerId: number, accountId: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}customers/${customerId}/account/${accountId}`)
            console.log(response);
            dispatch({type: AccountActionTypes.DELETE_ACCOUNT_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Failed to delete account. " + String(e)
            });
        }
    }

export const getAccountById = (id: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = axios.get(`${process.env.REACT_APP_API_URL}accounts/${id}`);
            console.log(response);
            dispatch({type: AccountActionTypes.GET_ACCOUNT_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Failed to get account. " + String(e)
            });
        }
    }

export const transfer = (toAccount: string, fromAccount: string, amount: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}accounts/transfer?from=${fromAccount}&to=${toAccount}&amount=${amount}`);
            console.log(response);
            dispatch({type: AccountActionTypes.TRANSFER_MONEY_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Transfer failed. " + String(e)
            });
        }
    }

export const withdraw = (number: string, amount: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}accounts/withdraw?number=${number}&amount=${amount}`);
            console.log(response);
            dispatch({type: AccountActionTypes.WITHDRAW_MONEY_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Withdraw failed. " + String(e)
            });
        }
    }

export const up = (number: string, amount: number) =>
    async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({type: AccountActionTypes.ACCOUNT_REQUEST});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}accounts/up?number=${number}&amount=${amount}`);
            console.log(response);
            dispatch({type: AccountActionTypes.UP_MONEY_SUCCESS});
        } catch (e) {
            dispatch({
                type: AccountActionTypes.REQUEST_ERROR,
                payload: "Up failed. " + String(e)
            });
        }
    }