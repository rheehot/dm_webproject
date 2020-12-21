import { questionApi } from '../api/questionApi';

const SELECT_QUESTION = 'SELECT_QUESTION';
const SELECT_QUESTION_SUCCESS = 'SELECT_QUESTION_SUCCESS';
const SELECT_QUESTION_ERROR = 'SELECT_QUESTION_ERROR';

const RESET = 'RESET';

export const questionAction = (state) => async dispatch => {
    const payload = await questionApi(state);
    console.log(payload);

    dispatch({ type: SELECT_QUESTION });
    try {
        dispatch({ type: SELECT_QUESTION_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: SELECT_QUESTION_SUCCESS, e: error });
    }
}

export const resetQuestion = () => ({ type: RESET });
const initalState = {
    loading: false,
    developers: [
        {
            dev_name: null,
            email: null,
            link: null,
        }
    ]
}

const reducer = (state = initalState, action) => {
    switch (action.type) {

        case RESET:
            return {
                loading: false,
                developers: [
                    {
                        dev_name: null,
                        email: null,
                        link: null,
                    }
                ]
            }

        case SELECT_QUESTION:
            return {
                ...state,
                loading: true,
            }
        case SELECT_QUESTION_SUCCESS:
            return {
                ...state,
                developers: [action.payload.data]
            }
        case SELECT_QUESTION_ERROR:
            return {
                ...state,
                loading: false,
                developers: [{
                    dev_name: null,
                    email: null,
                    link: null,
                }]
            }
        default: return state;
    }
}

export default reducer;