import { createSlice } from "@reduxjs/toolkit";
export const componentKey = "LOGIN";
const loginSlice = createSlice({
  name: componentKey,
  initialState: { isLoading: false },
  reducers: {
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingState } = loginSlice.actions;
export default loginSlice.reducer;
