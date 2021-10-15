import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";
import thunkMiddleWare from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
     compose(applyMiddleware(thunkMiddleWare))))


export default store


