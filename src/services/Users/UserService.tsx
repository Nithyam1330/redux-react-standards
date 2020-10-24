import http from 'axios';
import { IUser } from '../../components/Users/Users.interface';
import { store } from '../../redux/store';
import { fetchUsersFailureAction, fetchUsersRequestAction, fetchUsersSuccessAction } from '../../redux/Users/UserActions';
export const getUserDetail = async () => {
    store.dispatch(fetchUsersRequestAction());
    const response: any = await http.get('https://jsonplaceholder.typicode.com/todos').catch(e => {
        store.dispatch(fetchUsersFailureAction('Something went wrong'));
    })
    if (!response) {
        store.dispatch(fetchUsersFailureAction('Something went wrong'));
        return;
    }
    const userResponse = response.data as IUser;
    store.dispatch(fetchUsersSuccessAction(userResponse));
}