import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import thunkMiddleWare from "redux-thunk";
import newsReducer from './news_reducer';
import settingReducer from "./setting_reducer";
import musicReducer from "./music_reducer";

let reducers = combineReducers({
    dialog: dialogReducer,
    profile: profileReducer , 
    usersPage : usersReducer , 
    auth : authReducer ,
    newsPage : newsReducer ,
    setting : settingReducer , 
    musicPage : musicReducer 

});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store ;