import { createSlice } from "@reduxjs/toolkit";
export const componentKey = "MOVIES_LIST";
const moviesSlice = createSlice({
  name: componentKey,
  initialState: {
    moviesData: {
      page: 1,
      totalSize: 0,
      currentPage: 1,
      data: [] 
    },
  },
  reducers: {
    setMovies: (state, action) => {
      state.moviesData = {
        ...state.moviesData,
        ...action.payload
      };
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
