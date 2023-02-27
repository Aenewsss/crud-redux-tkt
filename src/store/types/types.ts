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
    albums: IAlbumsInitialState
}

export interface IAlbumsInitialState {
    data: IAlbum[],
    isLoading: boolean,
    error: any,
}
export interface IAlbum {
    id: string,
    name: string,
    userId: string
}