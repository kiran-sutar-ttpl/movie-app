import { all, put, takeLatest } from 'redux-saga/effects'
import { componentKey, setNavigateToHomeFromNewPassword, setNavigateToHomed } from './authenticatoinSlice'
import store from '../../store/store'

export const { postLoginUserWithCredentials, postSetNewPassword } = {
    postLoginUserWithCredentials: (payload) => {
        return {
            type: 'AUTHENTICATION/LOGIN_API',
            payload
        }
    },
    postSetNewPassword: (payload) => {
        return {
            type: 'AUTHENTICATION/NEW_PASSWORD',
            payload
        }
    },
}

function* postLoginUserWithCredentialsAsync(action) {
    try {


        yield put(setNavigateToHomed(true))
        // toast.success("Welcome aboard! You've successfully logged in.")

    } catch (error) {
        // toast.error(error?.response?.data?.message?.toString())
        console.log('err: ', error)
    } finally {
    }
}

function* postSetNewPasswordAsync(action) {
    try {

        // if (response.status === 201) {
            // toast.success("Password set successfully")
            yield put(setNavigateToHomeFromNewPassword(true))
        // }
    } catch (error) {
        // toast.error(error?.response?.data?.message?.toString())
        console.log('err: ', error)
    } finally {
        // yield put(setLoadingState({ state: PAGE_STATE.PAGE_READY }))
    }
}

function* rootSaga() {
    yield all([
        takeLatest(postLoginUserWithCredentials().type, postLoginUserWithCredentialsAsync),
        takeLatest(postSetNewPassword().type, postSetNewPasswordAsync),
    ])
}

store.sagaManager.addSaga(componentKey, rootSaga)