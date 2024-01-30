import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      state.gptSearch = action.payload;
    },
  },
});
export const { addGptSearchMovies, toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
