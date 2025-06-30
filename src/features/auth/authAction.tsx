
import type { LoginRequest } from "../../types/Auth/auth.request.type";
import type { LoginResponse } from "../../types/Auth/auth.response.type";
import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, type AuthActionTypes, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILURE } from "./authType";
import apiClient from "../../services/api.client";
import { LOGIN_URL, LOGOUT_URL } from "../../configs/api.url";
import type { Dispatch } from "react";

const authLoginRequest = (): AuthActionTypes => {
    return {
        type: AUTH_LOGIN_REQUEST,
    }
}

const authLoginSuccess = (data: LoginResponse): AuthActionTypes => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: data
    }
}

const authLoginFailure = (error: string): AuthActionTypes => {
    return {
        type: AUTH_LOGIN_FAILURE,
        payload: error
    }
}

const authLogoutRequest = (): AuthActionTypes => {
    return {
        type: AUTH_LOGOUT_REQUEST,
    }
}

const authLogoutSuccess = (): AuthActionTypes => {
    return {
        type: AUTH_LOGOUT_SUCCESS,
    }
}

const authLogoutFailure = (error: string): AuthActionTypes => {
    return {
        type: AUTH_LOGOUT_FAILURE,
        payload: error
    }
}

const authLogin = (payload: LoginRequest)=> {
    return async(dispatch: Dispatch<AuthActionTypes>) => {

        dispatch(authLoginRequest());
        try {
            const response = await apiClient.post<LoginResponse>(LOGIN_URL, payload);
            if(response.status == 201){
                if(response.data.code == 401){
                    dispatch(authLoginFailure("Invalid username"));
                    return;
                }
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                dispatch(authLoginSuccess(response.data as LoginResponse));
            }
        } catch (error) {
                dispatch(authLoginFailure(error as string));
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
    }
}

const authLogout = () => {
    return async(dispatch: Dispatch<AuthActionTypes>) => {
        dispatch(authLogoutRequest());
        try {
            const response = await apiClient.delete(LOGOUT_URL);
            if(response.status == 200){
                dispatch(authLogoutSuccess());
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

            }
        } catch (error) {
            dispatch(authLogoutFailure(error as string));
        }
    }
}


export { authLoginRequest, authLoginSuccess, authLoginFailure, authLogin, authLogoutRequest, authLogoutSuccess, authLogoutFailure, authLogout };