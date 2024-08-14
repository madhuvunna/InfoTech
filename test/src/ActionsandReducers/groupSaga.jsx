import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_GROUPS_REQUEST, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE } from './ActionsandReducers/authActions';

function* fetchGroups() {
    try {
        const response = yield call(axios.get, '/api/getGroup');
        yield put({ type: FETCH_GROUPS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: FETCH_GROUPS_FAILURE, payload: error.message });
    }
}

function* groupSaga() {
    yield takeEvery(FETCH_GROUPS_REQUEST, fetchGroups);
}

export default groupSaga;
