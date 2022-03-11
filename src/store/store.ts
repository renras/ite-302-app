import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import productQuantityReducer from "./productQuantity";

const store = configureStore({
  reducer: {
    app: appReducer,
    productQuantity: productQuantityReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
