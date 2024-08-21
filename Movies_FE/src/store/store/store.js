import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducermanager";
import rootSaga from "./sagamanger";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
