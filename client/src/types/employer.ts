export interface Employer {
    id: number,
    name: string,
    address: string,
    customers: number[],
}

export interface EmployerState {
    employers: Employer[],
    loading: boolean,
    error: null | string,
}

export enum EmployerActionTypes {
    EMPLOYER_REQUEST = "EMPLOYER_REQUEST",
    CREATE_EMPLOYER_SUCCESS = "CREATE_EMPLOYER_SUCCESS",
    GET_EMPLOYERS_SUCCESS = "GET_EMPLOYERS_SUCCESS",
    GET_EMPLOYER_SUCCESS = "GET_EMPLOYER_SUCCESS",
    DELETE_EMPLOYER_SUCCESS = "DELETE_EMPLOYER_SUCCESS",
    UPDATE_EMPLOYER_SUCCESS = "UPDATE_EMPLOYER_SUCCESS",
    REQUEST_ERROR = "REQUEST_ERROR",
}

interface EmployerRequestAction {
    type: EmployerActionTypes.EMPLOYER_REQUEST;
}

interface CreateEmployerSuccessAction {
    type: EmployerActionTypes.CREATE_EMPLOYER_SUCCESS;
}

interface GetEmployersSuccessAction {
    type: EmployerActionTypes.GET_EMPLOYERS_SUCCESS;
    payload: Employer[];
}

interface GetEmployerSuccessAction {
    type: EmployerActionTypes.GET_EMPLOYER_SUCCESS;
}

interface DeleteEmployerSuccessAction {
    type: EmployerActionTypes.DELETE_EMPLOYER_SUCCESS;
}

interface UpdateEmployerSuccessAction {
    type: EmployerActionTypes.UPDATE_EMPLOYER_SUCCESS;
}

interface RequestErrorAction {
    type: EmployerActionTypes.REQUEST_ERROR;
    payload: string;
}

export type EmployerAction =
    EmployerRequestAction |
    CreateEmployerSuccessAction |
    GetEmployersSuccessAction |
    GetEmployerSuccessAction |
    DeleteEmployerSuccessAction |
    UpdateEmployerSuccessAction |
    RequestErrorAction
