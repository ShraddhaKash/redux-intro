import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customer/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
