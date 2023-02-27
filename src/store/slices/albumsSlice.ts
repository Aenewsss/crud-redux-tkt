import { createSlice } from "@reduxjs/toolkit";
import { IAlbumsInitialState } from "../types/types";

const initialState: IAlbumsInitialState = {
    data: [],
    isLoading: false,
    error: null,
}

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers(builder) {
        
    }
})