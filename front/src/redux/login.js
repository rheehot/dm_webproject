export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const loginAction = (id, pw) => ({
    type: USER_LOGIN,
    id,
    pw,
})

const initalState = {
    isLogin: false,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log('user login', action.id, action.pw);
            return {
                ...state,
                isLogin: true,
            }
        case USER_LOGOUT:
            return {
                ...state,
                isLogin: false,
            }
        default: return state;
    }
}

export default reducer; 