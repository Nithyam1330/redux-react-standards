import { all } from "redux-saga/effects";
import { UsersSaga } from "./UsersSaga/Users.saga";

export function* rootSaga() {
    yield all([
        UsersSaga()
    ])
}

