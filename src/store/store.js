import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import customerReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer
  }
})

export default store;
