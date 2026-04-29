import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(productApi.middleware),
});