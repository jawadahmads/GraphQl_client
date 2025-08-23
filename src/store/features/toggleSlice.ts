import { createSlice } from "@reduxjs/toolkit";

let initialState: string = "docs";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleDocs: (state): string => {
      if (state === "docs") {
        return (state = "");
      }
      return (state = "docs");
    },
    toggleHistory: (state): string => {
      if (state === "history") {
        return (state = "");
      }
      return (state = "history");
    },
  },
});

export const { toggleDocs, toggleHistory } = toggleSlice.actions;
export default toggleSlice.reducer;
