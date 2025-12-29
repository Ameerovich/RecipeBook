import { User } from "../authintication/user";
import * as AuthActions from "./auth.actions";

export interface State{
    user: User,
    authError : string,
    isLoading : boolean
}

const initialState : State = {
user : null,
authError : null,
isLoading : false
}

export function authReducer(state=initialState,action : AuthActions.AuthActions){
    switch (action.type){
        case AuthActions.AUTHENTICATION_SUCCESS:
            const user = new User (action.payload.email,
                action.payload.id,
                action.payload._token,
                action.payload._tokenExpirationDate); 
            
            return {
                ...state,
                user: user,
                authError : null,
                isLoading : false
                
            };
        case AuthActions.LOGOUT :
            return {
                ...state,
                user:null
            };
        case AuthActions.AUTHENTICATION_FAIL:
            return{
                    ...state,
                    user: null,
                    authError: action.payload,
                    isLoading: false
            };
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                isLoading : true,
                authError: null
            };
        case AuthActions.CLEAN_ERROR:
            return {
                ...state,
                authError : null
            };
        default :
        return state;

    }

}