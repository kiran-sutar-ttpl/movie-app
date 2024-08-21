import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import loaderReducer from './loaderSlice'; 
import toasterReducer from './toasterSlice'
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    rootReducer,
    loader: loaderReducer,
    toaster: toasterReducer, 
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
