import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

export const AppViews = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
                <Route path={`${APP_PREFIX_PATH}/basic/planner`} component={lazy(() => import(`./planner`))} />
                <Route path={`${APP_PREFIX_PATH}/basic/clients/list`} exact={true} component={lazy(() => import(`./user-list`))}/>
                <Route path={`${APP_PREFIX_PATH}/basic/clients/list/:id`}  component={lazy(() => import(`./user-page`))}/>
                <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`}/>
            </Switch>
        </Suspense>
    )
}

export default withRouter(React.memo(AppViews));