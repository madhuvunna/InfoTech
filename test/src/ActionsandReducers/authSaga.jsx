import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './ActionsandReducers/authActions';


function* login(action) {
    try {
        const response = yield call(axios.post, '/api/postLogin', action.payload);
        localStorage.setItem('token', response.data.token);
        yield put({ type: LOGIN_SUCCESS, payload: response.data.token });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

function* authSaga() {
    yield takeEvery(LOGIN_REQUEST, login);
}

export default authSaga;
