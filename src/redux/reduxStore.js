import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // friendsSidebar: friendsSidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

// const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
     compose(applyMiddleware(thunkMiddleWare))))

window.__store__ = store;
export default store;


