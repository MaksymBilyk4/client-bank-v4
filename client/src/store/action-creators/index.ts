import * as AccountActionCreator from "./account";
import * as CustomerActionCreator from "./customer";
import * as EmployerActionCreator from "./employer";

export default {
    ...AccountActionCreator,
    ...CustomerActionCreator,
    ...EmployerActionCreator,
}