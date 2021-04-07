import { configureStore } from "@reduxjs/toolkit";
import newReducer from "./components/NewSlice";

const rootReducer = {
  Notes: newReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
