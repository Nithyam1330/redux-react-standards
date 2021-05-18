import { UserActions } from "../../redux/Users/UserActionTypes";
import {call, put, takeEvery} from 'redux-saga/effects';
import { getUserDetailAPI } from "../../redux/Users/UserThunk";
import { fetchUsersFailureAction, fetchUsersSuccessAction } from "../../redux/Users/UserActions";
function* sagaCallBackImplementaion() {
    try {
        const result = yield call(getUserDetailAPI);
        yield put(fetchUsersSuccessAction(result));
    } catch(e) {
        yield put(fetchUsersFailureAction('Something went wrong'));
    }
}
export function* UsersSaga() {
    yield takeEvery(UserActions.FETCH_USERS_REQUEST, sagaCallBackImplementaion);
}
