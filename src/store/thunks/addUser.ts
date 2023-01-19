import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const addUser = createAsyncThunk('users/addUser', async () => {
    const response = await api.post('/users', )
});