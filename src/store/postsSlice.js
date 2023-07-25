import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';



export const fetchPosts = createAsyncThunk('posts', async() => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
          );
          return response.data;
    } catch (error) {
        return error.message;
    }
   
});


const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.payload
        })
    }
});

export default postsSlice.reducer;

