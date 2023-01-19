import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchUsers: any = createAsyncThunk('users/fetch', async () => {
    const response = await api.get('/users');

    // await pause(30000)

    return response.data;
});

const pause = (duration: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}