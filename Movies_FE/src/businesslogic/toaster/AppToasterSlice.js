import { createSlice } from "@reduxjs/toolkit";

const toasterSlice = createSlice({
  name: "toaster",
  initialState: {
    open: false,
    message: "",
    severity: "info",
    anchorOrigin: { vertical: "top", horizontal: "right" },
    autoHideDuration: 6000,
  },
  reducers: {
    openToaster: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || "info";
      state.anchorOrigin = action.payload.anchorOrigin || {
        vertical: "top",
        horizontal: "right",
      };
      state.autoHideDuration = action.payload.autoHideDuration || 6000;
    },
    closeToaster: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "info";
    },
  },
});

export const { openToaster, closeToaster } = toasterSlice.actions;
export const selectToasterState = (state) => state.toaster;
export default toasterSlice.reducer;
