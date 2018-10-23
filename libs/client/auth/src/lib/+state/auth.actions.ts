import { Action } from '@ngrx/store';
import { Entity } from './auth.reducer';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
  constructor(public payload: any) {}
}

export type AuthAction = Login | LoginSuccess | LoginError;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginError
};
