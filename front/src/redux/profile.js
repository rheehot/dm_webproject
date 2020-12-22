import { profileApi } from '../api/profileApi';

const SEND_PROFILE = 'SEND_PROFILE';
const SEND_PROFILE_SUCCESS = 'SEND_PROFILE_SUCCESS';
const SEND_PROFILE_ERROR = 'SEND_PROFILE_ERROR';

export const profileAction = (state) => async dispatch => {
    const payload = await profileApi(state);
    console.log(payload);

    dispatch({ type: SEND_PROFILE });
    try {
        dispatch({ type: SEND_PROFILE_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: SEND_PROFILE_ERROR, e: error });
    }
}

const initalState = {
    loading: false,
    result: false,
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        case SEND_PROFILE:
            return {
                ...state,
                loading: true,
            }
        case SEND_PROFILE_SUCCESS:
            return {
                ...state,
                result: action.payload.data,
            }
        case SEND_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                result: action.payload.data,
            }
        default: return state;
    }
}

export default reducer;