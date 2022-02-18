import {all, call, fork, put, takeEvery,delay} from 'redux-saga/effects';
import {onFetchUsers, onRejectUsers} from '../actions'
import jsonPlaceholderService from "../../services/JsonplaceholderService";
import {FETCH_USERS} from "../constants/Users";


export function* fetchUsers() {
    yield takeEvery(FETCH_USERS, function* () {
        try {
            yield delay(1000)
            const users = yield call(jsonPlaceholderService.fetchUsers);
            if (users) {
                yield put(onFetchUsers(users));
            } else {
                yield put(onRejectUsers('ooops'));
            }
        } catch (err) {
            yield put(onRejectUsers(err));
        }
    });
}
export default function* rootSaga() {
  yield all([
		fork(fetchUsers)
  ]);
}
