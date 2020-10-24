export interface IUsersPage {
    loading: boolean,
    users: IUser[],
    error: string,
    heading: string,
    subTitle: string
}

export interface IUser {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}