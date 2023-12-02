import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
    popularMovies: null,
    topRatedMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVedio,
  addPopularMovies,
  topRatedMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
