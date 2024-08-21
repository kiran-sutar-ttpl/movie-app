import { createSlice } from "@reduxjs/toolkit";
export const componentKey = "LOADER";
const loaderSlice = createSlice({
  name: componentKey,
  initialState: { isLoading: false },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload?.isLoading;
    },
  },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
