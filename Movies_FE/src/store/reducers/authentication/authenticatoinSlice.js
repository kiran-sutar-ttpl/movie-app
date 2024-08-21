import store from "../../store/store";

const PAGE_STATE = {
    PRE_LOADING: 'preloading',
    LOADING: 'loading',
    PAGE_READY: 'ready',
} 

export const componentKey = 'AUTHENTICATION';
const { actions } = store.reducerManager.add({
    key: componentKey,
    addedReducers: {
        setLoadingState: (state, action) => {
            state.loadingState = action.payload;
        },
        setLoginInfoFieldsTouched: (state, action) => {
            state.loginInfoFieldsTouched = action.payload;
        },
        setAuthenticationDetails: (state, action) => {
            const { filedName, object } = action.payload;
            let authenticationDetails = { ...state.authenticationDetails[filedName] };

            Object.entries(object).map(([key, value]) => {
                authenticationDetails = {
                    ...authenticationDetails,
                    [key]: {
                        ...authenticationDetails[key],
                        ...value
                    }
                };

                state.authenticationDetails[filedName] = authenticationDetails;
            });
        },
        setNavigateToHomed: (state, action) => {
            state.navigateToHome = action.payload;
        },
        setNewPasswordInfoFieldsTouched: (state, action) => {
            state.newPasswordInfoFieldsTouched = action.payload;
        },
        setNavigateToHomeFromNewPassword: (state, action) => {
            state.navigateToHomeFromNewPassword = action.payload;
        },
        setIsRememberMe: (state, action) => {
            state.isRememberMe = action.payload;
        },
        setIsLogout: (state, action) => {
            state.isLogout = action.payload;
        }
    },
    initialReducerState: {
        loadingState: { state: PAGE_STATE.PAGE_READY, message: '' },
        loginInfoFieldsTouched: false,
        tes: ''
    }
});

export const {
    setLoadingState,
    setLoginInfoFieldsTouched,
    setAuthenticationDetails,
    setNavigateToHomed,
    setNewPasswordInfoFieldsTouched,
    setNavigateToHomeFromNewPassword,
    setIsRememberMe,
    setIsLogout
} = actions;