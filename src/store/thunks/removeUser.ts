import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { IUser } from "../types/types"

export const removeUser: any = createAsyncThunk('users/remove', async (user: IUser) => {
    await api.delete(`/users/${user.id}`);

    return user;
})