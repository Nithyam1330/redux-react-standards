export interface IUsersPage {
    loading: boolean, // API calls
    users: IUser[],
    error: string,
    heading: string, // Hard corded values
    subTitle: string,
    fetchData?:Function
}

export interface IUser {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}