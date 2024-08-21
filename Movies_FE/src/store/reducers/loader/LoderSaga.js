import { all, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "./LoaderSlice";

export const { startLoadingProcess, stopLoadingProcess } = {
  startLoadingProcess: (payload) => {
    return {
      type: "SET_LOADING",
      payload,
    };
  },
  stopLoadingProcess: (payload) => {
    return {
      type: "STOP_LOADING",
      payload,
    };
  },
};

function* handleLoadingProcess(action) {
  try {
    yield put(setLoading(action?.payload));
  } catch (error) {
    console.error("Error in handleLoadingProcess saga:", error);
  }
}

function* handleStopLoadingProcess(action) {
  try {
    yield put(setLoading({isLoading: false}));
  } catch (error) {
    console.error("Error in handleLoadingProcess saga:", error);
  }
}

export function* loadingRootSaga() {
  yield all([
    takeLatest(startLoadingProcess().type, handleLoadingProcess),
    takeLatest(stopLoadingProcess().type, handleStopLoadingProcess),
  ]);
}
