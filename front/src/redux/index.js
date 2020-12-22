import { combineReducers } from 'redux';
import members from './members';
import question from './question';
import profile from './profile';

const rootReducer = combineReducers({
    members,
    question,
    profile,
});

export default rootReducer;