import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./authSlice";
const reducers = combineReducers({
    auth: authReducer
})
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers)
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export default store;