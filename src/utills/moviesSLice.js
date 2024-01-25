import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailerVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideos } = moviesSLice.actions;
export default moviesSLice.reducer;
