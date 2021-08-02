import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsSidebarReducer from "./friendsSidebarReducer";

const reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSidebar: friendsSidebarReducer,
})

const store = createStore(reducers);

export default store;


