import { LOGIN_SUCCESS, LOGIN_FAILURE } from './ActionsandReducers/authActions';

const initialState = {
    token: null,
    error: null
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, token: action.payload, error: null };
        case LOGIN_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducers;
