import { combineReducers } from "@reduxjs/toolkit";
import LoaderSlice from "../reducers/loader/LoaderSlice";
import ToasterSlice from "../reducers/toaster/ToasterSlice";
import loginSlice from "../reducers/login/loginSlice";
import moviesSlice from "../moviesData/moviesSlice";
//
const rootReducer = combineReducers({
  loader: LoaderSlice,
  toaster: ToasterSlice,
  login: loginSlice,
  movies: moviesSlice,

  //Add other reducers main file as needed
});
//
export default rootReducer;
