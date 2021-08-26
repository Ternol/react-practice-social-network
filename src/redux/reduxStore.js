import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsSidebarReducer from "./reducers/friendsSidebarReducer";
import usersReducer from "./reducers/usersReducer";
import UIUtilsReducer from "./reducers/UIUtilsReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSidebar: friendsSidebarReducer,
    usersPage: usersReducer,
    UIUtils: UIUtilsReducer,
})

const store = createStore(reducers);

window.store = store;
export default store;


