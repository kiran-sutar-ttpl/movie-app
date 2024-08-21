import { all, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "../loader/LoaderSlice";
import LoginService from "../../../services/LoginService";
import { setToaster } from "../toaster/ToasterSlice";

export const { postLoginUserWithCredentials } = {
  postLoginUserWithCredentials: (payload) => {
    return {
      type: "AUTHENTICATION/LOGIN_API",
      payload,
    };
  },
};

function* postLoginUserWithCredentialsAsync(action) {
  try {
    yield put(setLoading(action?.payload));
    const response = yield LoginService.postLoginUserWithCredentials(
      action?.payload?.loginCreds
    );
    if (response?.data?.accessToken) {
      yield put(
        setToaster({
          open: true,
          message: "login success",
          severity: "success",
        })
      );
      if (typeof action?.payload?.navigate === "function") {
        localStorage.setItem(
          "isRememberMe",
          action?.payload?.isRememberMe || false
        );
        localStorage.setItem("token", response?.data?.accessToken);
        action?.payload?.navigate("/dashboard");
        yield put(setLoading({ isLoading: false }));
      }
    }
  } catch (error) {
    console.log("err: ", error);
    yield put(setLoading({ isLoading: false }));
    yield put(
      setToaster({
        open: true,
        message: error?.message,
        severity: "error",
      })
    );
  } finally {
    yield put(setLoading({ isLoading: false }));
  }
}

export function* loginRootSaga() {
  yield all([
    takeLatest(
      postLoginUserWithCredentials().type,
      postLoginUserWithCredentialsAsync
    ),
  ]);
}
