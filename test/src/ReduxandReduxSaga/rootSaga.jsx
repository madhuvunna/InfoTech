import { all } from 'redux-saga/effects';
import authSaga from './ActionsandReducers/authSaga';
import groupSaga from './ActionsandReducers/groupSaga';
import memberSaga from './ActionsandReducers/memberSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        groupSaga(),
        memberSaga()
    ]);
}
