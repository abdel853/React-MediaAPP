import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // we create the initial state and we give the name here
  allowLikes: true,
  allowDislikes: true,
};

const settingsSlice = createSlice({
  name: "settin",
  initialState, // here name but as we named it initiaState no need to repeat it, if the name is diff we could change
  reducers: {
    toggleAllowLikes: (state) => {
      console.log(state.allowLikes);
      state.allowLikes = !state.allowLikes;
    },

    toggleAllowDislikes: (state) => {
      state.allowDislikes = !state.allowDislikes;
    },
  },
});

export const { toggleAllowLikes, toggleAllowDislikes } = settingsSlice.actions;
export default settingsSlice.reducer;
