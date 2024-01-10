import { createSlice } from "@reduxjs/toolkit";
// import uuid from "react-uuid";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    likePost: (state, action) => {
      console.log(state);
      const id = action.payload;
      state.posts.forEach((post) => {
        if (post.id === id) {
          post.likes++;
        }
      });
    },
    dislikePost: (state, action) => {
      const id = action.payload;
      state.posts.forEach((post) => {
        if (post.id === id) {
          post.dislikes++;
        }
      });
    },

    addPost: (state, action) => {
      console.log("state.posts:", state.posts);

      state.posts.push(action.payload);
    },

    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      const updatedPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      state.posts = updatedPosts;
    },
  },
});

export const { likePost, dislikePost, addPost, setPosts, removePost } =
  postSlice.actions;
export default postSlice.reducer;
