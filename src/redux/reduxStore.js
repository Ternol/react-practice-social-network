import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsSidebarReducer from "./reducers/friendsSidebarReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSidebar: friendsSidebarReducer,
    usersPage: usersReducer,
})

const store = createStore(reducers);

export default store;


