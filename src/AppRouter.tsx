import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {Route,Switch,Redirect} from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import {initializeApp} from "./redux/reducers/appReducer";
import {useTypedSelector} from "./hooks/useTypedSelector";

const AppRouter:FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {initialized} = useTypedSelector(state => state.app)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(initializeApp())
    },[dispatch])

    return (
        <div>
            {!initialized
                ? <Loader/>
                : <div>
                    {isAuth
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

export default AppRouter;