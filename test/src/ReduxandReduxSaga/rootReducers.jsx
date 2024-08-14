import { combineReducers } from 'redux';
import authReducers from './ActionsandReducers/authReducer';
import groupReducers from './ActionsandReducers/groupReducer';
import memberReducers from './ActionsandReducers/memberReducer';

export default combineReducers({
    auth: authReducers,
    groups: groupReducers,
    members: memberReducers
});
