import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/constants";

const AppRouter: FC = () => {
    return (
        <div>
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component}  exact/>
                )}

                <Redirect to={HOME_ROUTE}/>
            </Switch>
        </div>
    );
};

export default AppRouter;