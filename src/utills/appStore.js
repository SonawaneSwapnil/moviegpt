import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSLice";
import gptReducer from "./gptSlice"
const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer,  gptSearch:gptReducer },
});

export default appStore;
