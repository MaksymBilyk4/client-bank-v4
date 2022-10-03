import {Dispatch} from "redux";
import {EmployerAction, EmployerActionTypes} from "../../types/employer";
import axios from "axios";

export const getEmployers = () =>
    async (dispatch: Dispatch<EmployerAction>) => {
        try {
            dispatch({type: EmployerActionTypes.EMPLOYER_REQUEST});
            const response = await axios.get(`${process.env.REACT_APP_API_URL}employers`);
            setTimeout(() => {
                dispatch({type: EmployerActionTypes.GET_EMPLOYERS_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: EmployerActionTypes.REQUEST_ERROR,
                payload: "Failed to get employers. " + String(e),
            })
        }
    }

export const createEmployer = (name: string, address: string) =>
    async (dispatch: Dispatch<EmployerAction>) => {
        try {
            dispatch({type: EmployerActionTypes.EMPLOYER_REQUEST});
            const response = await axios.post(`${process.env.REACT_APP_API_URL}employers`, {
                name,
                address,
            });
            console.log(response);
            dispatch({type: EmployerActionTypes.CREATE_EMPLOYER_SUCCESS});
        } catch (e) {
            dispatch({
                type: EmployerActionTypes.REQUEST_ERROR,
                payload: "Failed to create employer. " + String(e),
            })
        }
    }

export const deleteEmployer = (id: number) =>
    async (dispatch: Dispatch<EmployerAction>) => {
        try {
            dispatch({type: EmployerActionTypes.EMPLOYER_REQUEST});
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}employers/${id}`);
            console.log(response);
            dispatch({type: EmployerActionTypes.DELETE_EMPLOYER_SUCCESS})
        } catch (e) {
            dispatch({
                type: EmployerActionTypes.REQUEST_ERROR,
                payload: "Failed to delete employer. " + String(e),
            })
        }
    }

export const getEmployerById = (id: number) =>
    async (dispatch: Dispatch<EmployerAction>) => {
        try {
            dispatch({type: EmployerActionTypes.EMPLOYER_REQUEST});
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}employers/${id}`)
            dispatch({type: EmployerActionTypes.GET_EMPLOYER_SUCCESS});
            return data;
        } catch (e) {
            dispatch({
                type: EmployerActionTypes.REQUEST_ERROR,
                payload: `Failed to get employer with id ${id}. ` + String(e),
            })
        }
    }

export const updateEmployer = (id: number | undefined, name: string | undefined, address: string | undefined, customers: number[] | []) =>
    async (dispatch: Dispatch<EmployerAction>) => {
        try {
            dispatch({type: EmployerActionTypes.EMPLOYER_REQUEST});
            const response = await axios.put(`${process.env.REACT_APP_API_URL}employers`, {
                id,
                name,
                address,
                customers,
            });
            console.log(response);
            dispatch({type: EmployerActionTypes.UPDATE_EMPLOYER_SUCCESS});
        }catch (e) {
            dispatch({
                type: EmployerActionTypes.REQUEST_ERROR,
                payload: `Failed to update employer with id ${id}. ` + String(e),
            })
        }
    }