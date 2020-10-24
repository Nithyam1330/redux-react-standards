export const GetUsersList = (userState: any) => {
    return userState.users ? userState.users : [];
}

export const getLoadingStatus = (userState: any) => {
    return userState.loading;
}

export const getErrorMessage = (userState: any) => {
    return userState.error;
}