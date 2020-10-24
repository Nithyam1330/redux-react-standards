// Action Creators for User action types
import { UserActions } from "./UserActionTypes"

export const fetchUsersRequestAction = () => {
    return {
        type: UserActions.FETCH_USERS_REQUEST
    }
}


export const fetchUsersSuccessAction = (users: any) => {
    return {
        type: UserActions.FETCH_USERS_SUCCESS,
        payload: users
    }
}


export const fetchUsersFailureAction = (error: any) => {
    return {
        type: UserActions.FETCH_USERS_FAILURE,
        payload: error
    }
}