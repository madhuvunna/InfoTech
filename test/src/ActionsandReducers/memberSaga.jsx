import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_MEMBERS_REQUEST, FETCH_MEMBERS_SUCCESS, FETCH_MEMBERS_FAILURE } from'./ActionsandReducers/authActions';

function* fetchMembers(action) {
    try {
        const response = yield call(axios.get, `/api/members/group/${action.payload}`);
        yield put({ type: FETCH_MEMBERS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: FETCH_MEMBERS_FAILURE, payload: error.message });
    }
}

function* memberSaga() {
    yield takeEvery(FETCH_MEMBERS_REQUEST, fetchMembers);
}

export default memberSaga;
