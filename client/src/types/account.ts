export interface Account {
    id: number,
    number: string,
    currency: string,
    balance: number,
    customerId: number,
}

export interface AccountState {
    accounts: Account[],
    loading: boolean,
    error: null | string,
}

export enum AccountActionTypes {
    ACCOUNT_REQUEST = "ACCOUNT_REQUEST",
    CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS",
    GET_ACCOUNTS_SUCCESS = "GET_ACCOUNTS_SUCCESS",
    GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS",
    DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS",
    TRANSFER_MONEY_SUCCESS = "TRANSFER_MONEY_SUCCESS",
    WITHDRAW_MONEY_SUCCESS = "WITHDRAW_MONEY_SUCCESS",
    UP_MONEY_SUCCESS = "UP_MONEY_SUCCESS",
    REQUEST_ERROR = "REQUEST_ERROR",
}

interface AccountRequestAction {
    type: AccountActionTypes.ACCOUNT_REQUEST;
}

interface CreateAccountSuccessAction {
    type: AccountActionTypes.CREATE_ACCOUNT_SUCCESS;
}

interface GetAccountsSuccessAction {
    type: AccountActionTypes.GET_ACCOUNTS_SUCCESS;
    payload: Account[];
}

interface GetAccountSuccessAction {
    type: AccountActionTypes.GET_ACCOUNT_SUCCESS;
}

interface DeleteAccountSuccessAction {
    type: AccountActionTypes.DELETE_ACCOUNT_SUCCESS;
}

interface TransferMoneySuccessAction {
    type: AccountActionTypes.TRANSFER_MONEY_SUCCESS;
}

interface WithdrawMoneySuccessAction {
    type: AccountActionTypes.WITHDRAW_MONEY_SUCCESS;
}

interface UpMoneySuccessAction {
    type: AccountActionTypes.UP_MONEY_SUCCESS;
}

interface RequestErrorAction {
    type: AccountActionTypes.REQUEST_ERROR;
    payload: string;
}

export type AccountAction =
    AccountRequestAction |
    CreateAccountSuccessAction |
    GetAccountsSuccessAction |
    GetAccountSuccessAction |
    DeleteAccountSuccessAction |
    TransferMoneySuccessAction |
    WithdrawMoneySuccessAction |
    UpMoneySuccessAction |
    RequestErrorAction
