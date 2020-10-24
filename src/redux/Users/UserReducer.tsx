import { UserActions } from "./UserActionTypes"
import { IUserInitialState } from "./UserTypes"

const userInitState: IUserInitialState = {
    loading: false,
    users: [],
    error: ''
}
export const userReducer = (state = userInitState, action: any) => {
    switch(action.type) {
        case UserActions.FETCH_USERS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case UserActions.FETCH_USERS_SUCCESS: {
            const response = action.payload as IUserInitialState;
            return {
                ...state,
                loading: false,
                users: response
            }
        }
        case UserActions.FETCH_USERS_FAILURE: {
            const response = action.payload as IUserInitialState;
            return {
                ...state,
                loading: false,
                error: response,
                users: []
            }
        }
        default: {
            return state
        }
    }
}