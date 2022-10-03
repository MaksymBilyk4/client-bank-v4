import {
    CREATE_ACCOUNT_ROUTE,
    CREATE_CUSTOMER_ROUTE, CREATE_EMPLOYER_ROUTE, DELETE_ACCOUNT_ROUTE,
    DELETE_CUSTOMER_ROUTE, DELETE_EMPLOYER_ROUTE,
    HOME_ROUTE, TRANSFER_MONEY_ROUTE, UP_MONEY_ROUTE,
    UPDATE_CUSTOMER_ROUTE, UPDATE_EMPLOYER_ROUTE, WITHDRAW_MONEY_ROUTE
} from "./utils/constants";
import Home from "./pages/Home";
import CreateCustomer from "./pages/CreateCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";
import DeleteCustomer from "./pages/DeleteCustomer";
import CreateAccount from "./pages/CreateAccount";
import DeleteAccount from "./pages/DeleteAccount";
import TransferMoney from "./pages/TransferMoney";
import UpMoney from "./pages/UpMoney";
import WithdrawMoney from "./pages/WithdrawMoney";
import CreateEmployer from "./pages/CreateEmployer";
import DeleteEmployer from "./pages/DeleteEmployer";
import UpdateEmployer from "./pages/UpdateEmployer";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: CREATE_CUSTOMER_ROUTE,
        Component: CreateCustomer
    },
    {
        path: DELETE_CUSTOMER_ROUTE,
        Component: DeleteCustomer,
    },
    {
        path: UPDATE_CUSTOMER_ROUTE,
        Component: UpdateCustomer,
    },
    {
        path: CREATE_ACCOUNT_ROUTE,
        Component: CreateAccount,
    },
    {
        path: DELETE_ACCOUNT_ROUTE,
        Component: DeleteAccount,
    },
    {
        path: TRANSFER_MONEY_ROUTE,
        Component: TransferMoney,
    },
    {
        path: UP_MONEY_ROUTE,
        Component: UpMoney,
    },
    {
        path: WITHDRAW_MONEY_ROUTE,
        Component: WithdrawMoney,
    },
    {
        path: CREATE_EMPLOYER_ROUTE,
        Component: CreateEmployer,
    },
    {
        path: DELETE_EMPLOYER_ROUTE,
        Component: DeleteEmployer,
    },
    {
        path: UPDATE_EMPLOYER_ROUTE,
        Component: UpdateEmployer,
    }
];