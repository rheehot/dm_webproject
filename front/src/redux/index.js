import { combineReducers } from 'redux';
import members from './members';
import question from './question';

const rootReducer = combineReducers({
    members,
    question
});

export default rootReducer;