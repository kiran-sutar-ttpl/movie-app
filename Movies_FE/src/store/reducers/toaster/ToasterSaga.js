import { all, put, takeLatest } from "redux-saga/effects";
import { setToaster } from "./ToasterSlice";

export const { handleToaster } = {
  handleToaster: (payload) => {
    return {
      type: "OPEN_TOASTER",
      payload,
    };
  },
};

function* handleOpenToaster(action) {
  try {
    yield put(setToaster(action?.payload));
  } catch (error) {
    console.error("Error in handleOpenToaster saga:", error);
  }
}


export function* toasterRootSaga() {
  yield all([
    takeLatest(handleToaster().type, handleOpenToaster)
  ]);
}
