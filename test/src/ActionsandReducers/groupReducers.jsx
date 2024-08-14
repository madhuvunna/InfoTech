import { FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE } from './ActionsandReducers/authActions';


const initialState = {
    groups: [],
    error: null
};

const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUPS_SUCCESS:
            return { ...state, groups: action.payload, error: null };
        case FETCH_GROUPS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default groupReducer;
