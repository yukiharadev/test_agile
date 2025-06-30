import type { LoginResponse } from "../../types/Auth/auth.response.type";


export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
export const AUTH_LOGOUT_REQUEST = "AUTH_LOGOUT_REQUEST";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILURE = "AUTH_LOGOUT_FAILURE";



interface LoginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: LoginResponse;   
}

interface LoginFailureAction {
  type: typeof AUTH_LOGIN_FAILURE;
  payload: string;
}

interface LogoutRequestAction {
  type: typeof AUTH_LOGOUT_REQUEST;
}

interface LogoutSuccessAction {
  type: typeof AUTH_LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
  type: typeof AUTH_LOGOUT_FAILURE;
  payload: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;





