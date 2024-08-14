import { FETCH_MEMBERS_SUCCESS, FETCH_MEMBERS_FAILURE } from './ActionsandReducers/authActions';


const initialState = {
    members: [],
    error: null
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEMBERS_SUCCESS:
            return { ...state, members: action.payload, error: null };
        case FETCH_MEMBERS_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default memberReducer;
