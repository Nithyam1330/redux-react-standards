import http from 'axios';
import { IUser } from '../../components/Users/Users.interface';
import { fetchUsersFailureAction, fetchUsersRequestAction, fetchUsersSuccessAction } from '../../redux/Users/UserActions';
export const getUserDetail = () => {
    return async (dispatch: any) => {
        dispatch(fetchUsersRequestAction());
        const response: any = await http.get('https://jsonplaceholder.typicode.com/todos').catch(e => {
            dispatch(fetchUsersFailureAction('Something went wrong'));
        })
        if (!response) {
            dispatch(fetchUsersFailureAction('Something went wrong'));
            return;
        }
        const userResponse = response.data as IUser;
        dispatch(fetchUsersSuccessAction(userResponse));
    }
}

export const getUserDetailPromise = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequestAction());
        http.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            const userResponse = res.data as IUser;
            dispatch(fetchUsersSuccessAction(userResponse));
        }).catch(e => {
            dispatch(fetchUsersFailureAction('Something went wrong'));
        })
    }
}