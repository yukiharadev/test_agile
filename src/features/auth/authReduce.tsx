import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_FAILURE, AUTH_LOGOUT_SUCCESS } from "./authType";

let isAuth = false;
if(localStorage.getItem("accessToken") !== null){
    isAuth = true;
}

const initialState = {
    isLoading: false,
    isError: false,
    isAuthenticated: isAuth,
    token: null,
    error: null,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, isLoading: true };
        case AUTH_LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: true, token: action.payload };
        case AUTH_LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        case AUTH_LOGOUT_REQUEST:
            return { ...state, isLoading: true };
        case AUTH_LOGOUT_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: false, token: null, error: null };
        case AUTH_LOGOUT_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        default:
            return state;
    }
}

export default authReducer;