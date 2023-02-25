export interface IUsersInitialState {
    data: IUser[],
    isLoading: boolean,
    error: any,
}

export interface IUser {
    id: string,
    name: string
}

export interface IStore {
    users: IUsersInitialState
}