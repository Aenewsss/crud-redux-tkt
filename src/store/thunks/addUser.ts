import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { faker } from "@faker-js/faker";

export const addUser: any = createAsyncThunk('users/add', async () => {
    const response = await api.post('/users', {
        name: faker.name.fullName()
    });

    return response.data;
});