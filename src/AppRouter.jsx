import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {Route,Switch,Redirect} from "react-router-dom";
import Loader from "./UI/Loader";
import {initializeApp} from "./redux/reducers/appReducer";

const AppRouter = (props) => {
    useEffect(()=> {
        props.initializeApp()
    },[props])

    return (
        <div>
            {!props.initialized
                ? <Loader/>
                : <div>
                    {props.isAuth
                        ? <Switch>
                            {privateRoutes.map(route => <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/>)}
                            <Redirect to='/profile/:id?'/>
                        </Switch>
                        : <Switch>
                            {publicRoutes.map(route => <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/>)}
                            <Redirect to='/login'/>
                        </Switch>
                    }
                </div>
            }

        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(AppRouter);