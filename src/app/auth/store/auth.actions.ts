
import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATION_SUCCESS = '[Auth] Authentication Success';
export const LOGOUT= '[Auth] Logout';
export const AUTHENTICATION_FAIL= '[Auth] Authentication Fail';
export const SIGNUP_START='[Auth] Signup Start';
export const CLEAN_ERROR= '[Auth] Clean Error';
export const AUTO_LOGIN= '[Auth] Auto Login';

export class AuthenticationSuccess implements Action {
    readonly type = AUTHENTICATION_SUCCESS;
    
    constructor(public payload : { 
        email: string,
     id: string,
     _token: string,
     _tokenExpirationDate: Date,
    redirect : boolean
}){}
     
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class LoginStart implements Action{
    readonly type = LOGIN_START;

    constructor(public payload : {
        email : string ,
        password: string
    }){}
}
export class AuthenticationFail implements Action{
    readonly type =AUTHENTICATION_FAIL;
    constructor(public payload : string){}
}

export class SignupStart implements Action {
    readonly type = SIGNUP_START;
    constructor(public payload : {
        email : string ,
        password: string
    }){}
}

export class CleanError implements Action {
    readonly type = CLEAN_ERROR ;
}
export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
}
 
export type AuthActions =
 AuthenticationSuccess
|Logout
|AuthenticationFail
|LoginStart 
|SignupStart
|CleanError
|AutoLogin;

 
 
