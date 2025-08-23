import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const shortcutModel = createSlice({
  name: "model",
  initialState,
  reducers: {
    toggleShortcutkey: (state): boolean => {
      console.log("from toggle");
      return !state;
    },
  },
});

export const { toggleShortcutkey } = shortcutModel.actions;

export default shortcutModel.reducer;
