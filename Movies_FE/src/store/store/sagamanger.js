import { all } from "redux-saga/effects";
import { loadingRootSaga } from "../reducers/loader/LoderSaga";
import { toasterRootSaga } from "../reducers/toaster/ToasterSaga";
import { loginRootSaga } from '../reducers/login/loginSaga'
import { moviesRootSaga } from "../moviesData/moviesSaga";

function* rootSaga() {
  yield all([
    loadingRootSaga(),
    toasterRootSaga(),
    loginRootSaga(),
    moviesRootSaga()
    // Add other sagas as needed
  ]);
}
export default rootSaga;
