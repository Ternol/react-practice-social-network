import React from 'react';
import {connect} from "react-redux";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {Route,Switch,Redirect} from "react-router-dom";

const AppRouter = (props) => {

    return (
        <div>
            {props.isAuth
                ? <Switch>
                    {privateRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}/>)}
                    <Redirect to='/profile/:id?'/>
                </Switch>
                : <Switch>
                    {publicRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}/>)}
                    <Redirect to='/login'/>
                </Switch>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {})(AppRouter);