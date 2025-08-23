import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const settingSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    toggleSetting: (state): boolean => {
      console.log("from toggle");
      return !state;
    },
  },
});

export const { toggleSetting } = settingSlice.actions;

export default settingSlice.reducer;
