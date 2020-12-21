import { loginApi, logoutApi, signUpApi } from '../api/membersApi';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';


export const loginAction = (id, pw) => async dispatch => {
    const payload = await loginApi(id, pw);
    dispatch({ type: USER_LOGIN });
    try {
        dispatch({ type: USER_LOGIN_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: USER_LOGIN_ERROR, e: error });
    }
}

export const logoutAction = () => async dispatch => {
    const payload = await logoutApi();
    dispatch({ type: USER_LOGOUT });
    try {
        dispatch({ type: USER_LOGOUT_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: USER_LOGOUT_ERROR, e: error });
    }
}

export const signUpAction = (id, pw) => async dispatch => {
    const payload = await signUpApi(id, pw);
    dispatch({type: USER_SIGNUP});
    try {
        dispatch({type: USER_SIGNUP_SUCCESS, payload});
    } catch (error) {
        dispatch({type: USER_SIGNUP_ERROR, e: error});
    }
}

const initalState = {
    loading: false,
    isLogin: false,
    signUpStatus : false,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: true,
                isLogin: action.payload.data,
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                isLogin: false,
            }


        case USER_LOGOUT:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: true,
                isLogin: action.payload.data,
            }
        case USER_LOGOUT_ERROR: 
            return {
                ...state,
                loading: false,
            }


        case USER_SIGNUP:
            return {
                ...state,
                loading: true,
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: true,
                signUpStatus: true,
            }
        case USER_SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                signUpStatus: false,
            }
        default: return state;
    }
}

export default reducer; 