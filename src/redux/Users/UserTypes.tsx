import { IUser } from "../../components/Users/Users.interface";

export interface IUserInitialState {
    loading: boolean,
    users: IUser[],
    error: string
}