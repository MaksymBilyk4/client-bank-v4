import {combineReducers} from "redux";
import {accountReducer} from "./accountReducer";
import {customerReducer} from "./customerReducer";
import {employerReducer} from "./employerReducer";

export const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
    employer: employerReducer,
});

export type RootState = ReturnType<typeof rootReducer>