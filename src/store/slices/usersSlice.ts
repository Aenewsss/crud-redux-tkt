import { createSlice } from "@reduxjs/toolkit";
import { IUsersInitialState } from "../types/types";
import { fetchUsers } from "../thunks/fetchUsers";

const initialState: IUsersInitialState = {
    data: [],
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const usersReducer = usersSlice.reducer;